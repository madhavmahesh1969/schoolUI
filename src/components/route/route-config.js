(function() {

    /**
     * Function responsible to create routing config of the school app.
     * @param $routeProvider
     */
    var config = function($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: './html/components/html/login.html',
                controller: 'loginAppCtrl',
                controllerAs: 'lac'
                /* ,
                resolve: {
                    GetMenuData: ['restaurantAppMenuDataService', function(restaurantAppMenuDataService) {
                        return restaurantAppMenuDataService.getMenuData();
                    }]
                } */
            })
            .when('/userDetails', {
                templateUrl: './html/components/html/user_details.html',
                controller: 'loginAppCtrl',
                controllerAs: 'lac'
                /* ,
                resolve: {
                    GetMenuData: ['restaurantAppMenuDataService', function(restaurantAppMenuDataService) {
                        return restaurantAppMenuDataService.getMenuData();
                    }]
                } */
            })
            .otherwise({
                redirectTo: '/'
            });
    };

    angular
        .module('schoolApp')
        .config(['$routeProvider', '$locationProvider', config]);

})();