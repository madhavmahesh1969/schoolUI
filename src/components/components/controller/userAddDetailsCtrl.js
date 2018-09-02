(function() {
  "use strict";
  /**
     * Function responsible to create a controller.
     */
  var userAddDetailsCtrl = function(
    $scope,
    questionService,
    $q,
    $location,
    userAddDetailsService
  ) {
    var uadc;
    uadc = this;
    uadc.$q = $q;
    uadc.questionService = questionService;
    uadc.userAddDetailsService = userAddDetailsService;
    uadc.postData = {
      "userName":'',
      "password":'',
      "question1":'',
      "question2":'',
      "question3":'',
      "answer1":'',
      "answer2":'',
      "answer3":''
    };
    uadc.goToLogin = function(){
      $location.path("/");
    }
    uadc.getQuestions = function() {
      uadc.questionService.getQuestions().then(function(questions) {
          console.log("questions", questions);
          uadc.mainQuestions = questions.data;
        });
    };
    uadc.getQuestions();

    uadc.selectedQuestion = function(){
     
    }
    uadc.postDataToService = function(){
      console.log(uadc.postData);
        uadc.userAddDetailsService.createUser(JSON.parse(JSON.stringify(uadc.postData)));
    }
  };

  angular
    .module("schoolApp")
    .controller("userAddDetailsCtrl", [
      "$scope",
      "questionService",
      "$q",
      "$location",
      "userAddDetailsService",
      userAddDetailsCtrl
    ]);
})();
