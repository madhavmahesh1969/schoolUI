(function() {

    /**
     * Function responsible to create routing config of the school app.
     * @param $routeProvider
     */
    var config = function($routeProvider,$locationProvider) {
        //$locationProvider.hashPrefix('!');
        //Yet to add logout, forget password, user can add another user
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
            .when('/userQuestions', {
                templateUrl: './html/components/html/user_questions.html',
                controller: 'userQuestionsCtrl',
                controllerAs: 'uqc'
                /* ,
                resolve: {
                    GetMenuData: ['restaurantAppMenuDataService', function(restaurantAppMenuDataService) {
                        return restaurantAppMenuDataService.getMenuData();
                    }]
                } */
            })
            .when('/userDetails', {
                templateUrl: './html/components/html/user_details.html',
                controller: 'userDetailsCtrl',
                controllerAs: 'udc'
                /* ,
                resolve: {
                    GetMenuData: ['restaurantAppMenuDataService', function(restaurantAppMenuDataService) {
                        return restaurantAppMenuDataService.getMenuData();
                    }]
                } */
            })
            .when('/userAddDetails', {
                templateUrl: './html/components/html/user_add_details.html',
                controller: 'userAddDetailsCtrl',
                controllerAs: 'uadc'
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