import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { AppStateService } from '../services/app-state.service';
import { environment } from '../../../../environments/environment';
import { FireCommonService } from '@annuadvent/ngx-tools/fire-common';
import { APP_STATE_KEYS } from '../constants/app-state.constants';

/**
 * A factory to provide application data, before the app starts, like app config, menu items etc.
 * This factory should be provided in app module as APP_INITIALIZER, so that it runs before app runs.
 * @date 6/8/2023 - 4:20:26 PM
 *
 * @export
 * @param {AppStateService} appStateService
 * @returns {() => any}
 */
export function appInit(
  appStateService: AppStateService,
  appConfigService: AppConfigService,
  fireCommonService: FireCommonService,
) {
  // Sets app config from env or from db
  appConfigService.config = environment.appConfig;

  // Initialize firebase with its config
  fireCommonService.firebaseConfig = appConfigService.config.firebase;

  // Sequential promises are needed here for navCategories. For other you can have parallel promises.
  const allPromises = Promise.all([
    appStateService.setState(APP_STATE_KEYS.mainNavItems),
  ])

  return () => allPromises;
}
