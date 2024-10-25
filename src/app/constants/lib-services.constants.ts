
        // ngx-common-ui imports
        import { HighlightService } from '@annuadvent/ngx-common-ui/code-block';
        import { MetaService } from '@annuadvent/ngx-common-ui/meta';
        import { NestedNavService } from '@annuadvent/ngx-common-ui/nested-nav';
        import { ThemeService } from '@annuadvent/ngx-common-ui/theme';
        
        // ngx-cms imports
        import { AiArticlesService } from '@annuadvent/ngx-cms/openai-auto-articles';
        import { ArticleEditorService } from '@annuadvent/ngx-cms/article-editor';
        import { ContentEditorService } from '@annuadvent/ngx-cms/content-editor';
        import { Html2JsonService } from '@annuadvent/ngx-cms/content-editor';
        import { SelectionService } from '@annuadvent/ngx-cms/content-editor';
        import { TableService } from '@annuadvent/ngx-cms/content-editor';
        
        // ngx-core imports
        import { AppConfigService } from '@annuadvent/ngx-core/app-config';
        import { CategoriesQueryService } from '@annuadvent/ngx-core/helpers-categories';
        import { CategoriesUtilsService } from '@annuadvent/ngx-core/helpers-categories';
        import { FormConfigService } from '@annuadvent/ngx-core/helpers-forms';
        import { GlobalConfigService } from '@annuadvent/ngx-core/global-config';
        import { ImageValidatorService } from '@annuadvent/ngx-core/helpers-forms';
        import { PincodeValidatorService } from '@annuadvent/ngx-core/helpers-forms';
        import { ProductImageResizeService } from '@annuadvent/ngx-core/helpers-ecommerce';
        import { ProductQueryService } from '@annuadvent/ngx-core/helpers-ecommerce';
        import { UtilsService } from '@annuadvent/ngx-core/utils';
        
        // ngx-tools imports
        import { FireArticlesHttpService } from '@annuadvent/ngx-tools/fire-cms';
        import { FireAuthService } from '@annuadvent/ngx-tools/fire-auth';
        import { FireAuthUiService } from '@annuadvent/ngx-tools/fire-auth';
        import { FireCategoriesHttpService } from '@annuadvent/ngx-tools/fire-cms';
        import { FireCommonService } from '@annuadvent/ngx-tools/fire-common';
        import { FireStorageImageService } from '@annuadvent/ngx-tools/fire-storage';
        import { FireStorageSitemapService } from '@annuadvent/ngx-tools/fire-storage';
        import { FirestoreHttpService } from '@annuadvent/ngx-tools/fire-store';
        import { FirestoreParserService } from '@annuadvent/ngx-tools/fire-store';
        import { FirestoreQueryService } from '@annuadvent/ngx-tools/fire-store';
        import { ImageBrowserService } from '@annuadvent/ngx-tools/fire-storage';
        import { IsLoggedInGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { OpenaiConfigService } from '@annuadvent/ngx-tools/openai';
        import { OpenaiHttpService } from '@annuadvent/ngx-tools/openai';
        import { OpenaiService } from '@annuadvent/ngx-tools/openai';
        import { RoleAdminGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleAuthorGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleEditorGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleManagerGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RolePaidMemberGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleReaderGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleStudentGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { RoleTeacherGuard } from '@annuadvent/ngx-tools/fire-auth';
        import { SitemapService } from '@annuadvent/ngx-tools/fire-storage';
        
        // ngx-ecommerce imports
        import { AddressService } from '@annuadvent/ngx-ecommerce/address';
        import { AppImagesService } from '@annuadvent/ngx-ecommerce/app-images';
        import { CartService } from '@annuadvent/ngx-ecommerce/cart';
        import { InventoryService } from '@annuadvent/ngx-ecommerce/manage-product';
        import { ManageProductService } from '@annuadvent/ngx-ecommerce/manage-product';
        import { ProductDetailService } from '@annuadvent/ngx-ecommerce/product-detail';
        import { WishlistService } from '@annuadvent/ngx-ecommerce/wishlist';
        export const libServiceClasses = {
    'ngx-common-ui': {
        HighlightService,
    MetaService,
    NestedNavService,
    ThemeService
},
    'ngx-cms': {
        AiArticlesService,
    ArticleEditorService,
    ContentEditorService,
    Html2JsonService,
    SelectionService,
    TableService
},
    'ngx-core': {
        AppConfigService,
    CategoriesQueryService,
    CategoriesUtilsService,
    FormConfigService,
    GlobalConfigService,
    ImageValidatorService,
    PincodeValidatorService,
    ProductImageResizeService,
    ProductQueryService,
    UtilsService
},
    'ngx-tools': {
        FireArticlesHttpService,
    FireAuthService,
    FireAuthUiService,
    FireCategoriesHttpService,
    FireCommonService,
    FireStorageImageService,
    FireStorageSitemapService,
    FirestoreHttpService,
    FirestoreParserService,
    FirestoreQueryService,
    ImageBrowserService,
    IsLoggedInGuard,
    OpenaiConfigService,
    OpenaiHttpService,
    OpenaiService,
    RoleAdminGuard,
    RoleAuthorGuard,
    RoleEditorGuard,
    RoleManagerGuard,
    RolePaidMemberGuard,
    RoleReaderGuard,
    RoleStudentGuard,
    RoleTeacherGuard,
    SitemapService
},
    'ngx-ecommerce': {
        AddressService,
    AppImagesService,
    CartService,
    InventoryService,
    ManageProductService,
    ProductDetailService,
    WishlistService
},
}