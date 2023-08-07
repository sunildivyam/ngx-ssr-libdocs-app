import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MetaInfo, MetaService } from '@annuadvent/ngx-common-ui/meta';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { LibAssetInfo, LibInfo, LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { metaInfo as libHomeMetaInfo } from '../constants/libdocs-home-page.constants';

@Injectable({
  providedIn: 'root'
})
export class LibdocsMetaService {


  constructor(
    private metaService: MetaService,
    private appConfigService: AppConfigService,
    private utilsService: UtilsService,
    private router: Router,
  ) { }


  public setPageMeta(
    title: string = '',
    description: string = '',
    keywords: Array<string> = [],
    image: string = ''
  ): MetaInfo {
    const appMetaInfo: MetaInfo = { ...this.appConfigService.config.metaInfo };

    const pageMeta: MetaInfo = {
      ...appMetaInfo,
      title: title || appMetaInfo.title,
      description: description || appMetaInfo.description.replace('{{libNames}}', ''),
      keywords: keywords?.length ? keywords.join(', ') : appMetaInfo.keywords,
      "article:tag": keywords?.length ? keywords.join(', ') : appMetaInfo.keywords,
      "article:published_time": this.utilsService.currentDate,
      url: this.router.url,
      image: image || appMetaInfo.image,
    }

    this.metaService.setPageMeta(pageMeta);

    return pageMeta;
  }

  public setLibsHomePageMeta(libsInfo: LibsInfo): MetaInfo {
    const appMetaInfo: MetaInfo = { ...this.appConfigService.config.metaInfo };
    const libsInfoArr = libsInfo && Object.values(libsInfo) || [];

    return this.setPageMeta(
      `${appMetaInfo.title} ${libHomeMetaInfo.title}`,
      libHomeMetaInfo.description.replace('{{libNames}}', libsInfoArr.map(li => li?.name).join(', ')),
      [...libHomeMetaInfo.keywords.split(','), ...libsInfoArr.map(li => li?.name || '')]
    );
  }

  public setLibInfoPageMeta(libInfo: LibInfo): MetaInfo {
    return this.setPageMeta(
      libInfo.fullName,
      libInfo.description,
      libInfo.keywords,
      `assets/${libInfo?.name}.jpeg`,
    );
  }

  public setAssetTypeInfoPageMeta(assetType: string, libInfo: LibInfo): MetaInfo {
    return this.setPageMeta(
      `${libInfo.fullName} - ${assetType}`,
      libInfo.description,
      [`${libInfo?.fullName} ${assetType}`, ...libInfo.keywords],
      `assets/${libInfo?.name}.jpeg`,
    );
  }

  public setAssetInfoPageMeta(
    libInfo: LibInfo,
    assetInfo: LibAssetInfo): MetaInfo {
    return this.setPageMeta(
      `${libInfo.fullName} - ${assetInfo.name}`,
      assetInfo.description,
      [`${libInfo?.fullName}`, `${assetInfo.name}`, ...libInfo.keywords],
      `assets/${libInfo?.name}.jpeg`,
    );
  }
}
