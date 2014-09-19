var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider: ng.route.IRouteProvider, $locationProvieder: ng.ILocationProvider) {

    $locationProvieder.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    }).when('/users/', {
            templateUrl: '/views/users.html',
            controller: 'UsersCtrl'
        }).when('/products/', {
            templateUrl: '/views/products.html',
            controller: 'ProductsCtrl'
        }).otherwise({ redirectTo: '/' });

});