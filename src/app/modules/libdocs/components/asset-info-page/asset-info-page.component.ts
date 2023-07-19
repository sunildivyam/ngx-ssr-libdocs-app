import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsData, LibAssetTypeEnums } from '@annuadvent/ngx-lib-docs/docs-common';
import { libComponentData } from '../../../../constants/lib-components-data.constants';
import { libComponentClasses } from '../../../../constants/lib-components.constants';
import { libServiceClasses } from '../../../../constants/lib-services.constants';
import { LibdocsMetaService } from '../../services/libdocs-meta.service';

@Component({
  selector: 'app-asset-info-page',
  templateUrl: './asset-info-page.component.html',
  styleUrls: ['./asset-info-page.component.scss']
})
export class AssetInfoPageComponent {
  assetType: LibAssetTypeEnums;
  assetInfo: any;
  assetTypes = LibAssetTypeEnums;
  assetClass: any = null;
  assetData: DocsData = null;
  libNavOpened: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private libdocsMetaService: LibdocsMetaService,
  ) {
    this.route.data.subscribe((data: any) => {
      this.assetType = this.route.snapshot.params['assetType'];
      const libName = this.route.parent.snapshot.params['libName'];
      const libInfo = this.route.parent.snapshot.data['libInfo'];
      this.assetInfo = data?.assetInfo;

      // sets page meta
      this.libdocsMetaService.setAssetInfoPageMeta(libInfo, this.assetInfo)

      if (this.assetInfo) {
        try {
          switch (this.assetType) {
            case this.assetTypes.components:
              this.assetData = libComponentData[libName][this.assetInfo.name];
              this.assetClass = libComponentClasses[libName][this.assetInfo.name];
              break;
            case this.assetTypes.services:
              this.assetData = null;
              this.assetClass = libServiceClasses[libName][this.assetInfo.name];
              break;
            default:
              this.assetData = null;
              this.assetClass = null;
          }
        } catch (err) {
          this.assetData = null;
          this.assetClass = null;
        }
      }
    })
  }
}
