(function() {
  "use strict";
  /**
     * Function responsible to make service call.
     */
  var userAddDetailsService = function(userAddDetailsToRESTService, $q) {
    this.userAddDetailsToRESTService = userAddDetailsToRESTService;
    this.$q = $q;
    var service = this;
  };

  /**
     * Function responsible to make service call to load menu card data.
     * @returns {*|Function}
     */
  userAddDetailsService.prototype.createUser = function(postMessage) {
    console.log("get questions form service");
    //this.schoolAppLoginFromRESTService.login(username,password);
    var deferred = this.$q.defer();
    this.userAddDetailsToRESTService
      .createUser(postMessage)
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
    .service("userAddDetailsService", [
      "userAddDetailsToRESTService",
      "$q",
      userAddDetailsService
    ]);
})();