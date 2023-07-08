import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibAssetTypeEnums } from '@annuadvent/ngx-lib-docs/docs-common';

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
  ) {
    this.assetType = this.route.snapshot.params['assetType'];

    this.route.data.subscribe((data: any) => {
      this.assets = data?.assetTypeInfo;
    })
  }
}
