import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibdocsRoutingModule } from './libdocs-routing.module';
import { LibdocsHomePageComponent } from './components/libdocs-home-page/libdocs-home-page.component';
import { LibInfoPageComponent } from './components/lib-info-page/lib-info-page.component';
import { AssetTypeInfoPageComponent } from './components/asset-type-info-page/asset-type-info-page.component';
import { AssetInfoPageComponent } from './components/asset-info-page/asset-info-page.component';
import { RouterModule } from '@angular/router';
import { LibInfoResolver } from './resolvers/lib-info.resolver';
import { ComponentInfoModule } from '@annuadvent/ngx-lib-docs/component-info';
import { ServiceInfoModule } from '@annuadvent/ngx-lib-docs/service-info';
import { InterfaceInfoModule } from '@annuadvent/ngx-lib-docs/interface-info';
import { ClassInfoModule } from '@annuadvent/ngx-lib-docs/class-info';
import { DirectiveInfoModule } from '@annuadvent/ngx-lib-docs/directive-info';
import { GuardInfoModule } from '@annuadvent/ngx-lib-docs/guard-info';
import { InterceptorInfoModule } from '@annuadvent/ngx-lib-docs/interceptor-info';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { HamburgerModule } from '@annuadvent/ngx-common-ui/hamburger';
import { DrawerModule } from '@annuadvent/ngx-common-ui/drawer';
import { AsideNavModule } from '@annuadvent/ngx-common-ui/aside-nav';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';



@NgModule({
  declarations: [
    LibdocsHomePageComponent,
    LibInfoPageComponent,
    AssetTypeInfoPageComponent,
    AssetInfoPageComponent
  ],
  providers: [LibInfoResolver],
  imports: [
    CommonModule,
    LibdocsRoutingModule,
    RouterModule,
    ComponentInfoModule,
    ServiceInfoModule,
    InterfaceInfoModule,
    ClassInfoModule,
    DirectiveInfoModule,
    GuardInfoModule,
    InterceptorInfoModule,
    CardModule,
    AsideNavModule,
    CollapsibleModule,
    ErrorModule,
  ]
})
export class LibdocsModule { }
