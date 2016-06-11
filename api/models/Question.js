/**
 * Question.js
 *
 * @description :: Quiz Question
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    text              : { type    : "string", unique: true, index: true, notNull: true },
  	type				      : { model 	: 'QuestionType', index: true },
  	category		      : { model 	: 'QuestionCategory', index: true},
  	kind				      : { model 	: 'QuestionKind', index: true },
  	isMultipleChoice	: { type 	  : 'Boolean' },
  	hasManyAnswers		: { type 	  : 'Boolean'},
    score             : { type    : 'integer', index: true, notNull: true },//http://stackoverflow.com/a/28595858

  	answers : {
      collection: 'answer',
      via: 'question'
    }
  }
};

