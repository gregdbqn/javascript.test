const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

var authCheck = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://gregdbqn.au.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://gregdbqn.au.auth0.com/api/v2/',
  issuer: `https://gregdbqn.au.auth0.com/`,
  algorithms: ['RS256']
});


module.exports = authCheck;