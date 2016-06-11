/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  var questionKinds = [
    {
      text: "Text",
      desc: "Text questionKind"
    },
    {
      text: "Audio",
      desc: "Audio questionKind"
    }];

  var questionCategories = [
    {
      text: "Sports",
      desc: "Sports questionCategory"
    },
    {
      text: "Religion",
      desc: "Religion questionCategory"
    }];

  var questionTypes = [
    {
      text: "Silver",
      desc: "Silver questionType"
    },
    {
      text: "Normal",
      desc: "Normal questionType"
    },
    {
      text: "Diamond",
      desc: "Diamond questionType"
    },
    {
      text: "Golden",
      desc: "Golden questionType"
    }];

  var createCB = function (err, created) {
    console.log('New entity created ' + created);
    if (err) {
      console.log('Error' + err);
    }
  };

  QuestionKind.create(questionKinds).exec(createCB);

  QuestionCategory.create(questionCategories).exec(createCB);

  QuestionType.create(questionTypes).exec(createCB);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
