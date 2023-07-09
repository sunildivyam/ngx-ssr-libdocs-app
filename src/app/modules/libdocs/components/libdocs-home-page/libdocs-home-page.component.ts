import { Component } from '@angular/core';
import { LibAssetTypeEnums, LibInfo, LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { AppState, AppStateService } from '../../../app-core';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { MetaInfo, MetaService } from '@annuadvent/ngx-common-ui/meta';
import { metaInfo as pageMetaInfo } from '../../constants/libdocs-home-page.constants';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libdocs-home-page',
  templateUrl: './libdocs-home-page.component.html',
  styleUrls: ['./libdocs-home-page.component.scss']
})
export class LibdocsHomePageComponent {
  libsInfo: LibsInfo;
  libsInfoArr: Array<LibInfo> = [];
  assetTypesArr: Array<string> = Object.values(LibAssetTypeEnums);
  description: string = '';
  companyName: string = '';
  pageMeta: MetaInfo = pageMetaInfo;

  constructor(
    private appStateService: AppStateService,
    private appConfigService: AppConfigService,
    private metaService: MetaService,
    private utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.description = this.appConfigService.config?.metaInfo?.description || '';
    this.companyName = this.appConfigService.config?.metaInfo?.title || '';

    this.appStateService.appState.subscribe((appState: AppState) => {
      this.libsInfo = appState.libsInfo;
      this.libsInfoArr = this.libsInfo && Object.values(this.libsInfo) || [];

      // set page meta
      this.setPageMeta();
    });
  }

  private setPageMeta(): void {
    const appMetaInfo: MetaInfo = { ...this.appConfigService.config.metaInfo };

    this.pageMeta = {
      ...appMetaInfo,
      title: `${appMetaInfo.title} ${pageMetaInfo.title}`,
      "article:published_time": this.utilsService.currentDate,
      "article:tag": pageMetaInfo['article:tag'] + ', ' + this.libsInfoArr.map(li => li?.name).join(', '),
      keywords: pageMetaInfo.keywords + ', ' + this.libsInfoArr.map(li => li?.name).join(', '),
      description: pageMetaInfo.description.replace('{{libNames}}', this.libsInfoArr.map(li => li?.name).join(', ')),
      url: this.router.url,
    }
    this.metaService.setPageMeta(this.pageMeta);
  }
}
