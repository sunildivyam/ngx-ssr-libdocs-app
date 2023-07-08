import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { LibInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { AppStateService } from '../../app-core/services/app-state.service';
import { APP_STATE_KEYS } from '../../app-core/constants/app-state.constants';

export const assetTypeInfoResolver: ResolveFn<any> = async (route, state) => {
  const appStateService: AppStateService = inject(AppStateService);

  const libName = route.parent.params['libName'];
  const assetType = route.params['assetType'];

  const libsInfo = appStateService.appStateValue[APP_STATE_KEYS.libsInfo];
  const libInfo: LibInfo = libsInfo && libsInfo[libName] || null;

  return libInfo.libAssetsInfo && libInfo.libAssetsInfo[assetType];
};
