import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibdocsRoutingModule } from './libdocs-routing.module';
import { LibdocsHomePageComponent } from './components/libdocs-home-page/libdocs-home-page.component';
import { LibInfoPageComponent } from './components/lib-info-page/lib-info-page.component';
import { AssetTypeInfoPageComponent } from './components/asset-type-info-page/asset-type-info-page.component';
import { AssetInfoPageComponent } from './components/asset-info-page/asset-info-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LibdocsHomePageComponent,
    LibInfoPageComponent,
    AssetTypeInfoPageComponent,
    AssetInfoPageComponent
  ],
  imports: [
    CommonModule,
    LibdocsRoutingModule,
    RouterModule,
  ]
})
export class LibdocsModule { }
