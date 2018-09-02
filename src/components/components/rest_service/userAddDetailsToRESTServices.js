(function() {
    'use strict';
    /**
     * Function responsible to make REST api call to consume the data
     * @param $http
     */
    var userAddDetailsToRESTService = function($http) {
        this.$http = $http;
    };
    
    /**
     * Function responsible to make REST api call to consume the MENU data
     */
    userAddDetailsToRESTService.prototype.createUser = function(postMessage) {
        console.log('Fromservice2',postMessage);
        var url = 'http://localhost:3000/api/user';
        return this.$http.post(url,postMessage);        
    };

    angular
        .module('schoolApp')
        .service('userAddDetailsToRESTService', ['$http', userAddDetailsToRESTService]);
})();