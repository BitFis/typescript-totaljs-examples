var app = angular.module('app', ['ngRoute']);

class Route {

    constructor(public $routeProvider: ng.route.IRouteProvider, public $locationProvider: ng.ILocationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/users/', {
                templateUrl: '/views/users.html',
                controller: 'UsersCtrl'
            })
            .when('/products/', {
                templateUrl: '/views/products.html',
                controller: 'ProductsCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }
}

app.config(Route);/*

app.config(function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {

    $locationProvider.html5Mode(true);
    
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

});*/