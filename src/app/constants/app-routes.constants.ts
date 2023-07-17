import { Routes } from '@angular/router';

export const routes: Routes = [
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
