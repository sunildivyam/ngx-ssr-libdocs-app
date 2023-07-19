import { Routes } from '@angular/router';
import {
    ContactUsComponent,
    AboutUsComponent,
    PrivacyComponent,
    TermsAndConditionsComponent,
    AppHomeComponent,
} from '../modules/app-core';

export const routes: Routes = [
    {
        path: '',
        component: AppHomeComponent,
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
    },
    {
        path: 'tnc/terms-and-conditions',
        component: TermsAndConditionsComponent,
    },
    {
        path: 'tnc/privacy-policy',
        component: PrivacyComponent,
    },
    {
        path: 'libs',
        loadChildren: () => import('../modules/libdocs/libdocs.module').then(m => m.LibdocsModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
