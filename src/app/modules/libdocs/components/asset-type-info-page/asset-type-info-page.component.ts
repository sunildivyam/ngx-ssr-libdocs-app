import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibAssetTypeEnums } from '@annuadvent/ngx-lib-docs/docs-common';
import { LibdocsMetaService } from '../../services/libdocs-meta.service';

@Component({
  selector: 'app-asset-type-info-page',
  templateUrl: './asset-type-info-page.component.html',
  styleUrls: ['./asset-type-info-page.component.scss']
})
export class AssetTypeInfoPageComponent {
  assetType: LibAssetTypeEnums;
  assets: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private libdocsMetaService: LibdocsMetaService,
  ) {

    this.route.data.subscribe((data: any) => {
      this.assetType = this.route.snapshot.params['assetType'];
      this.assets = data?.assetTypeInfo;
      const libInfo = this.route.parent.snapshot.data['libInfo'] || null;

      // sets page meta
      this.libdocsMetaService.setAssetTypeInfoPageMeta(this.assetType, libInfo)
    })
  }
}
