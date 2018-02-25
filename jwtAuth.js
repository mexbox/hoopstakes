const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://hoopstakes.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: `https://api.hoopestakes.com`,
  issuer: `https://hoopstakes.auth0.com/`,
  algorithms: ['RS256']
});

module.exports = checkJwt;