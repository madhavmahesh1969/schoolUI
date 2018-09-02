(function() {
  "use strict";
  /**
     * Function responsible to create a controller.
     */
  var userQuestionsCtrl = function(
    $scope,
    schoolAppLoginService,
    $q,
    $location,
    $routeParams
  ) {
    var uqc;
    uqc = this;
    uqc.$q = $q;
    uqc.schoolAppLoginService = schoolAppLoginService;
    uqc.username = "";
    uqc.password = "";

    uqc.getUserQuestions = function(userDetails) {
      console.log("userDetails", userDetails);
      uqc.userDetails = JSON.parse(userDetails);
      console.log("uqc.userDetails", uqc.userDetails);
    };
    uqc.getUserQuestions($routeParams.userId);
    uqc.submitForm = function() {
      if (
        uqc.answer1 == uqc.userDetails.answer1 &&
        uqc.answer2 == uqc.userDetails.answer2 &&
        uqc.answer3 == uqc.userDetails.answer3
      ) {
        //   uqc.postData = { userID: uqc.userDetails.username };
        $location.path(
          "/userDetails/" + uqc.userDetails.userName);
      }
    };
  };

  angular
    .module("schoolApp")
    .controller("userQuestionsCtrl", [
      "$scope",
      "schoolAppLoginService",
      "$q",
      "$location",
      "$routeParams",
      userQuestionsCtrl
    ]);
})();
