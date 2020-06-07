// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const backend = { url: 'https://app.teamloan.pt/api/' };
const keycloak = {
    url: 'https://auth.teamloan.pt/auth/',
    realm: 'TEAMLOAN',
    grantType: 'password',
    clientId: 'TEAMLOAN_WEB_APP'
};

const googleAnalytics = { userId: 'UA-162361193-1' };
export const environment = {
    production: true,
    backend,
    keycloak,
    googleAnalytics
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
