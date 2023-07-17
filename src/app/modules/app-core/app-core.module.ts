import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us';

import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { ModalModule } from '@annuadvent/ngx-common-ui/modal';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { DocsCommonModule } from '@annuadvent/ngx-lib-docs/docs-common';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    CardModule,
    ErrorModule,
    SpinnerModule,
    ModalModule,
    UtilsModule,
    DocsCommonModule,
  ],
  exports: [ContactUsComponent],
})
export class AppCoreModule { }
