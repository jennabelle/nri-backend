// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'MainController'
        })

    $locationProvider.html5Mode(true);

}]);
