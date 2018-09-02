(function() {
  "use strict";
  /**
     * Function responsible to make REST api call to consume the data
     * @param $http
     */
  var questionFromRESTService = function($http) {
    this.$http = $http;
  };

  /**
     * Function responsible to make REST api call to consume the MENU data
     */
  questionFromRESTService.prototype.getQuestions = function() {
    console.log("From question service");
    var url = "http://localhost:3000/api/questions";
    return this.$http.get(url);
  };

  angular
    .module("schoolApp")
    .service("questionFromRESTService", ["$http", questionFromRESTService]);
})();
