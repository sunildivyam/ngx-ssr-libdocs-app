import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppStateService } from '../../app-core/services/app-state.service';
import { DocsInfoService, LibInfo, LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { APP_STATE_KEYS } from '../../app-core/constants/app-state.constants';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';

@Injectable()
export class LibInfoResolver {
  constructor(
    private appStateService: AppStateService,
    private appConfigService: AppConfigService,
    private docsInfoService: DocsInfoService,
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<LibInfo> {
    const libName = route.params['libName'];

    await this.appStateService.setState(APP_STATE_KEYS.libsInfo);

    const libsInfo: LibsInfo = this.appStateService.appStateValue[APP_STATE_KEYS.libsInfo];
    let libInfo: LibInfo = null;
    if (libsInfo) {
      libInfo = libsInfo[libName];
    }

    if (libInfo) {
      // Fetch all assets of the lib from the libs documentation.json
      libInfo.libAssetsInfo = await this.docsInfoService.getLibAssetsInfo(
        libName,
        `${this.appConfigService.config.apiBaseUrl}/assets/${libName}/documentation.json`
      );
    }

    this.appStateService.updateState(
      APP_STATE_KEYS.libsInfo,
      {
        ...libsInfo,
        [libName]: libInfo
      });

    return libInfo;
  }
}
