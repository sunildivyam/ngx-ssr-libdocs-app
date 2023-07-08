import { Route, Routes } from '@angular/router';
import { LoginComponent } from '../modules/app-core';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Sign In' },
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
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
