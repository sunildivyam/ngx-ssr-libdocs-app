import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { ModalModule } from '@annuadvent/ngx-common-ui/modal';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { DocsCommonModule } from '@annuadvent/ngx-lib-docs/docs-common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';


@NgModule({
  declarations: [ContactUsComponent, AboutUsComponent, TermsAndConditionsComponent, PrivacyComponent, AppHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ErrorModule,
    SpinnerModule,
    ModalModule,
    UtilsModule,
    DocsCommonModule,
    SlideshowModule,
  ],
  exports: [ContactUsComponent, AboutUsComponent, TermsAndConditionsComponent, PrivacyComponent, AppHomeComponent],
})
export class AppCoreModule { }
