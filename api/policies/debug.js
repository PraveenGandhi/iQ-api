/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to debug
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {

  console.log(req);
  var response = next();
  console.log(res);
  console.log(response);
  return response;

};
