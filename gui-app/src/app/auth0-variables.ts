interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'c1j3JIiJ4z5GIyjbQmGiGLWbwc09AkGr',
  CLIENT_DOMAIN: 'gregdbqn.au.auth0.com',
  AUDIENCE: 'https://gregdbqn.au.auth0.com/api/v2/',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};