import { Component } from '@angular/core';
import { MetaInfo } from '@annuadvent/ngx-common-ui/meta';
import { LibAssetTypeEnums, LibInfo, LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { AppStateService } from '../../services/app-state.service';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { AppMetaService } from '../../services/app-meta.service';
import { AppState } from '../../interfaces/app-state.interface';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {
  libsInfo: LibsInfo;
  libsInfoArr: Array<LibInfo> = [];
  assetTypesArr: Array<string> = Object.values(LibAssetTypeEnums);
  companyName: string = '';
  pageMeta: MetaInfo = null;

  constructor(
    private appStateService: AppStateService,
    private appConfigService: AppConfigService,
    private appMetaService: AppMetaService,
  ) {
    this.companyName = this.appConfigService.config?.metaInfo?.title || '';

    this.appStateService.appState.subscribe((appState: AppState) => {
      this.libsInfo = appState.libsInfo;
      this.libsInfoArr = this.libsInfo && Object.values(this.libsInfo) || [];

      // set page meta
      this.pageMeta = this.appMetaService.setHomePageMeta(this.libsInfoArr.map(libInfo => libInfo.name));
    });
  }
}
