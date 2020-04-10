export interface AccessTokenInterface {
    exp: number;
    iat: number;
    jti: string;
    iss: string;
    aud: string;
    sub: string;
    typ: string;
    azp: string;
    session_state: string;
    acr: string;
    realm_access: { roles: any[] };
    resource_access: { account: any };
    scope: string;
    email_verified: boolean;
    groups: string[];
    preferred_username: string;
    uuid: string;
    email: string;
}
