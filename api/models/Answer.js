/**
 * Answer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    question  : { model 	: 'Question'},
    text      : { type    : "string", index: true, unique: true, notNull: true },
    desc      : { type    : "string", index: true },
    isCorrect : 'boolean'
  }
};

