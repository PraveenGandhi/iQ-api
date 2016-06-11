/**
 * QuestionType.js
 *
 * @description :: Golden/Silver/Normal...
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//TODO name it as Weightage
module.exports = {

  attributes: {
    text      : {type: "string", unique: true, index: true, notNull: true },
    desc      : {type: "string", index: true },
    weight    : 'number'
  }
};

