(function() {
    'use strict';
    /**
     * Function responsible to create a controller.
     */
    var userDetailsCtrl = function($scope, schoolAppLoginService,$q, $location) {
        var lac;
        lac = this;
        lac.$q = $q;
        lac.schoolAppLoginService  = schoolAppLoginService;
        lac.username='';
        lac.password='';
        
        lac.login = function() {
            
        
            //var deferred = lac.$q.defer();
            /* lac.schoolAppLoginService.login(lac.username,lac.password).then(function(loginornot) {
                console.log('loginornot',loginornot.data);       */      
                $location.path('userDetails');
            /* }); */
           
        }
    };

    angular
        .module('schoolApp')
        .controller('userDetailsCtrl', ['$scope', 'schoolAppLoginService', '$q', '$location',  userDetailsCtrl]);
})();