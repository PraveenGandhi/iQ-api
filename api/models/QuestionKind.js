/**
 * QuestionKind.js
 *
 * @description :: Text/Image/Audio/Video
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    text      : {type: "string", unique: true, index: true, notNull: true },
    desc      : {type: "string", index: true }
  }
};

