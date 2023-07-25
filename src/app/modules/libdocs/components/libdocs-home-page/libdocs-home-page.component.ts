import { Component } from '@angular/core';
import { LibAssetTypeEnums, LibInfo, LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { AppState, AppStateService } from '../../../app-core';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { MetaInfo } from '@annuadvent/ngx-common-ui/meta';
import { LibdocsMetaService } from '../../services/libdocs-meta.service';
import { UtilsService } from '@annuadvent/ngx-core/utils';

@Component({
  selector: 'app-libdocs-home-page',
  templateUrl: './libdocs-home-page.component.html',
  styleUrls: ['./libdocs-home-page.component.scss']
})
export class LibdocsHomePageComponent {
  libsInfo: LibsInfo;
  libsInfoArr: Array<LibInfo> = [];
  assetTypesArr: Array<string> = Object.values(LibAssetTypeEnums);
  appDescription: string = '';
  companyName: string = '';
  pageMeta: MetaInfo = null;

  constructor(
    private appStateService: AppStateService,
    private appConfigService: AppConfigService,
    private libdocsMetaService: LibdocsMetaService,
    private utilsService: UtilsService,
  ) {

    this.companyName = this.appConfigService.config?.metaInfo?.title || '';

    this.appStateService.appState.subscribe((appState: AppState) => {
      this.libsInfo = appState.libsInfo;
      this.libsInfoArr = this.libsInfo && Object.values(this.libsInfo) || [];

      this.appDescription = this.appConfigService.config?.metaInfo?.description || '';
      this.appDescription = this.appDescription.replace(
        '{{libNames}}',
        this.utilsService.nauturalJoinArray(this.libsInfoArr.map(libInfo => libInfo.name)));

      // set page meta
      this.pageMeta = this.libdocsMetaService.setLibsHomePageMeta(this.libsInfo);
    });
  }

}
