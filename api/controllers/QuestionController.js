/**
 * QuestionController
 *
 * @description :: Server-side logic for managing Questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  currentUser:function (req,res) {
    if ( !req.isAuthenticated() ) return res.forbidden();

    return res.json({user: req.user});
  }

};

