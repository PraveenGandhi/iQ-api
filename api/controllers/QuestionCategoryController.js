/**
 * QuestionCategoryController
 *
 * @description :: Server-side logic for managing Questioncategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test:function (req,res) {
		res.send('hello');
	},
	hi:function (req,res) {
		var name = req.param('id');
		res.send('Hi '+(name?name:'Bro')+'!');
	}
};

