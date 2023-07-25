import { Routes } from '@angular/router';
import { LibdocsHomePageComponent } from '../components/libdocs-home-page/libdocs-home-page.component';
import { LibInfoPageComponent } from '../components/lib-info-page/lib-info-page.component';
import { AssetTypeInfoPageComponent } from '../components/asset-type-info-page/asset-type-info-page.component';
import { AssetInfoPageComponent } from '../components/asset-info-page/asset-info-page.component';
import { LibInfoResolver } from '../resolvers/lib-info.resolver';
import { assetTypeInfoResolver } from '../resolvers/asset-type-info.resolver';
import { assetInfoResolver } from '../resolvers/asset-info.resolver';

export const routes: Routes = [
    {
        path: '',
        component: LibdocsHomePageComponent,
        runGuardsAndResolvers: 'always',
    },
    {
        path: ':libName',
        component: LibInfoPageComponent,
        resolve: { libInfo: LibInfoResolver },
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: ':assetType',
                component: AssetTypeInfoPageComponent,
                resolve: { assetTypeInfo: assetTypeInfoResolver },
                runGuardsAndResolvers: 'always',
            },
            {
                path: ':assetType/:assetName',
                component: AssetInfoPageComponent,
                resolve: { assetInfo: assetInfoResolver },
                runGuardsAndResolvers: 'always',
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
