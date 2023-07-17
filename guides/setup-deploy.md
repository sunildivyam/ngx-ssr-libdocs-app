# Setup and deployment

**Note:**
Client side only build is deployed to firebase. SSR build is not deployed to firebase. So following points to be noted:
- No firebase function is used for SSR function.
- `index.html` is generated from `angular.json` instead of `index.original.html`.

## Steps:

### Generate all library documentation related json files from code.
 - `assets/libs-info.json` and `assets/[lib-name]/documentation.json` files
 - Run `npm run docs:ngx-ssr-libdocs-app`

### Generate all library resources, Angular asset Classes and data import ts files.
 - Generates `app/constants/lib-components.constants.ts`, `app/constants/lib-components-data.constants.ts` and `app/constants/lib-services.constants.ts`
 - Run `npm run docs:imports:ngx-ssr-libdocs-app`

### Generates firebase build
- Performs build and copy build files t firebase publish folder
- Run `npm run firebase:build:ngx-ssr-libdocs-app:[development | staging | production]`

### Deploy to firebase hosting
    - Deploys generated build to firebase hosting app as per `firebase.json` and `.firebaserc`
    - Run `npm run firebase:deploy:hosting:ngx-ssr-libdocs-app:[development | staging | production]`
### Verify your deployment visiting the deployed app url
    - Visit app url as per the deployment environment.

## App Urls
- https://ngx-libs.annuadvent.com - Prod public app url
- https://docs-annuadvent-prod.web.app - Prod app url
- https://docs-annu-business.web.app - Staging app url
