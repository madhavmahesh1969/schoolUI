!function(){"use strict";angular.module("schoolApp",["ngRoute"])}(),function(){"use strict";var o=function(o,e){this.schoolAppLoginFromRESTService=o,this.$q=e};o.prototype.login=function(o,e){console.log("Fromservice1",o,e);var n=this.$q.defer();return this.schoolAppLoginFromRESTService.login(o,e).then(function(o){console.log("loginornot",o),n.resolve(o)}).catch(function(o){n.reject(o)}),n.promise},angular.module("schoolApp").service("schoolAppLoginService",["schoolAppLoginFromRESTService","$q",o])}(),function(){"use strict";var o=function(o){this.$http=o};o.prototype.login=function(o,e){console.log("Fromservice2",o,e);return this.$http.post("http://localhost:3000/api/login",{username:o,password:e})},angular.module("schoolApp").service("schoolAppLoginFromRESTService",["$http",o])}(),function(){"use strict";angular.module("schoolApp").controller("loginAppCtrl",["$scope","schoolAppLoginService","$q","$location",function(o,e,n,t){var l;(l=this).$q=n,l.schoolAppLoginService=e,l.username="",l.password="",l.login=function(){console.log("username",l.username),console.log("password",l.password),l.schoolAppLoginService.login(l.username,l.password).then(function(o){console.log("loginornot",o.data),t.path("userDetails")})}}])}(),angular.module("schoolApp").config(["$routeProvider","$locationProvider",function(o,e){e.hashPrefix("!"),o.when("/",{templateUrl:"./html/components/html/login.html",controller:"loginAppCtrl",controllerAs:"lac"}).when("/userDetails",{templateUrl:"./html/components/html/user_details.html",controller:"loginAppCtrl",controllerAs:"lac"}).otherwise({redirectTo:"/"})}]);