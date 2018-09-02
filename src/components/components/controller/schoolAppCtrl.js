(function() {
  "use strict";
  /**
     * Function responsible to create a controller.
     */
  var loginAppCtrl = function($scope, schoolAppLoginService, $q, $location) {
    var lac;
    lac = this;
    lac.$q = $q;
    lac.schoolAppLoginService = schoolAppLoginService;
    lac.username = "";
    lac.password = "";
    lac.goToAddUser=function(){
      $location.path("/userAddDetails");
    };

    lac.login = function() {
      console.log("username", lac.username);
      console.log("password", lac.password);

      //var deferred = lac.$q.defer();
      lac.schoolAppLoginService
        .login(lac.username, lac.password)
        .then(function(loginornot) {
          console.log("loginornot", loginornot);
          loginornot = loginornot.data[0];
          console.log("loginornot         check", loginornot);
          console.log("loginornot.password", loginornot.password);
          //console.log('loginornot         check',loginornot);
          if (loginornot && loginornot.password == lac.password) {
            ///$location.path("userAddDetails");

            $location.path("/userQuestions/" + JSON.stringify(loginornot));
            //.search({userId:lac.username});
          }
        });
    };
    lac.goToForgotPassword = function() {
      $location.path("/forgotPassword");
    };
  };

  angular
    .module("schoolApp")
    .controller("loginAppCtrl", [
      "$scope",
      "schoolAppLoginService",
      "$q",
      "$location",
      loginAppCtrl
    ]);
})();
