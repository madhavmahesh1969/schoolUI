(function() {
    'use strict';
    /**
     * Function responsible to make service call.
     */
    var schoolAppLoginService = function(schoolAppLoginFromRESTService, $q) {
        this.schoolAppLoginFromRESTService = schoolAppLoginFromRESTService;
        this.$q = $q;
        var service = this;
    };
    
    /**
     * Function responsible to make service call to load menu card data.
     * @returns {*|Function}
     */
    schoolAppLoginService.prototype.login = function(username,password) {
        console.log('Fromservice1',username,password);
        //this.schoolAppLoginFromRESTService.login(username,password);
        var deferred = this.$q.defer();
        this.schoolAppLoginFromRESTService.login(username,password).then(function(loginornot) {
            console.log('loginornot',loginornot);
            deferred.resolve(loginornot);
        })['catch'](function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    angular
        .module('schoolApp')
        .service('schoolAppLoginService', ['schoolAppLoginFromRESTService','$q', schoolAppLoginService]);
})();