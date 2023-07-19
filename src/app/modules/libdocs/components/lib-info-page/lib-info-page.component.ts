import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibAssetTypeEnums, LibInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { NavItem } from '@annuadvent/ngx-common-ui/aside-nav';
import { LibdocsMetaService } from '../../services/libdocs-meta.service';

@Component({
  selector: 'app-lib-info-page',
  templateUrl: './lib-info-page.component.html',
  styleUrls: ['./lib-info-page.component.scss']
})
export class LibInfoPageComponent {
  libInfo: LibInfo | null = null;
  assetTypesArr: Array<string> = Object.values(LibAssetTypeEnums);
  asideNavItems: Array<NavItem> = [];

  constructor(
    public route: ActivatedRoute,
    private libdocsMetaService: LibdocsMetaService,
  ) {
    this.route.data.subscribe((data) => {
      this.libInfo = data.libInfo;
      this.asideNavItems = this.parseLibInfoToNavItems(this.libInfo);
      // set page meta
      this.libdocsMetaService.setLibInfoPageMeta(this.libInfo);
    });
  }

  private parseLibInfoToNavItems(libInfo: LibInfo): Array<NavItem> {
    const navItems: Array<NavItem> = [];
    this.assetTypesArr.forEach((assetType: LibAssetTypeEnums) => {
      const assets = libInfo?.libAssetsInfo[assetType] || [];
      // Asset Type nav item
      assets.length && navItems.push({
        separator: true,
        title: assetType.toUpperCase()
      } as NavItem);

      assets.forEach(ast => {
        navItems.push({
          title: ast.name,
          href: `${assetType}/${ast.name}`
        } as NavItem);
      })
    });

    return navItems;
  }
}
