(function() {
    'use strict';
    /**
     * Function responsible to create a controller.
     */
    var userDetailsCtrl = function($scope, schoolAppLoginService,$q, $location, $routeParams) {
        var udc;
        udc = this;
        udc.$q = $q;
        udc.schoolAppLoginService  = schoolAppLoginService;
        udc.username='';
        udc.password='';
        
        udc.onLoad = function(username) {
            console.log('username',$routeParams.username);
            udc.username = username;
        }
        udc.onLoad($routeParams.username);
    };

    angular
        .module('schoolApp')
        .controller('userDetailsCtrl', ['$scope', 'schoolAppLoginService', '$q', '$location','$routeParams',  userDetailsCtrl]);
})();