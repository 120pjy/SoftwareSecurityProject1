angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider

    .when('/', {
        templateUrl: 'app/views/pages/home.html',
        controller: 'homeController'
    })

    .when('/register', {
        templateUrl: 'app/views/pages/register.html',
        controller: 'regCtrl',
        controllerAs: 'register'
    })

    .when('/login', {
        templateUrl: 'app/views/pages/login.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
    })

    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});