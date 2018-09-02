(function() {
  "use strict";
  /**
     * Function responsible to make service call.
     */
  var questionService = function(questionFromRESTService, $q) {
    this.questionFromRESTService = questionFromRESTService;
    this.$q = $q;
    var service = this;
  };

  /**
     * Function responsible to make service call to load menu card data.
     * @returns {*|Function}
     */
  questionService.prototype.getQuestions = function(username, password) {
    console.log("get questions form service");
    //this.schoolAppLoginFromRESTService.login(username,password);
    var deferred = this.$q.defer();
    this.questionFromRESTService
      .getQuestions()
      .then(function(questions) {
        console.log("questions", questions);
        deferred.resolve(questions);
      })
      ["catch"](function(error) {
        deferred.reject(error);
      });
    return deferred.promise;
  };

  angular
    .module("schoolApp")
    .service("questionService", [
      "questionFromRESTService",
      "$q",
      questionService
    ]);
})();
