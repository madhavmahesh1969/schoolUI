(function() {
    'use strict';
    /**
     * Function responsible to make REST api call to consume the data
     * @param $http
     */
    var schoolAppLoginFromRESTService = function($http) {
        this.$http = $http;
    };
    
    /**
     * Function responsible to make REST api call to consume the MENU data
     */
    schoolAppLoginFromRESTService.prototype.login = function(username,password) {
        console.log('Fromservice2',username,password);
        var url = 'http://localhost:3000/api/login';
        return this.$http.post(url,{'username':username,'password':password});        
    };

    angular
        .module('schoolApp')
        .service('schoolAppLoginFromRESTService', ['$http', schoolAppLoginFromRESTService]);
})();