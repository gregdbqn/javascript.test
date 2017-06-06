var jwt = require('express-jwt');

var authCheck = jwt({
    secret: new Buffer('2O0-uCKDNnEORqNMVlqn9ftEtPhPu1AHp6-UU6aU0jUunUBU-ElB2R6InztrFDlW', 'base64'),
    audience: 'c1j3JIiJ4z5GIyjbQmGiGLWbwc09AkGr',
});

module.exports = authCheck;