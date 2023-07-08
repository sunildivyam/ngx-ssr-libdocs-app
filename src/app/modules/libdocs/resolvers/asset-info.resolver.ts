import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { APP_STATE_KEYS, AppStateService } from '../../app-core';
import { LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';

export const assetInfoResolver: ResolveFn<any> = (route, state) => {
  const appStateService: AppStateService = inject(AppStateService);

  const libName = route.parent.params['libName'];
  const assetType = route.params['assetType'];
  const assetName = route.params['assetName'];

  const libsInfo: LibsInfo = appStateService.appStateValue[APP_STATE_KEYS.libsInfo];

  const assetInfo = libsInfo[libName]?.libAssetsInfo[assetType]?.find(asset => asset.name === assetName);

  return assetInfo;
};
