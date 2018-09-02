(function() {
  "use strict";
  /**
     * Function responsible to create a controller.
     */
  var forgotPasswordCtrl = function(
    $scope,
    schoolAppLoginService,
    $q,
    $location
  ) {
    var fpc;
    fpc = this;
    fpc.$q = $q;
    fpc.schoolAppLoginService = schoolAppLoginService;
    fpc.username = "";
    fpc.password = "";
    fpc.showDetails = false;
    fpc.userDetails = {};
    fpc.showPassword = false;
    fpc.getUserDetails = function() {
      fpc.schoolAppLoginService.login(fpc.username).then(function(loginornot) {
        fpc.showDetails = true;
        console.log("loginornot", loginornot);
        fpc.userDetails = loginornot.data[0];
      });
    };
    fpc.getPassword = function() {
      if (fpc.answer1 == fpc.userDetails.answer1) fpc.showPassword = true;
    };
    fpc.backtoLogin = function() {
      $location.path("/");
    };
  };

  angular
    .module("schoolApp")
    .controller("forgotPasswordCtrl", [
      "$scope",
      "schoolAppLoginService",
      "$q",
      "$location",
      forgotPasswordCtrl
    ]);
})();
