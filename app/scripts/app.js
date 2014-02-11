'use strict';

var app = angular.module('sniprApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'firebase'
]);

app.config(function ($stateProvider, $locationProvider) {
    // Use html5 urls on browsers that support it
    $locationProvider.html5Mode(true);

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('add', {
        url: '/add',
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
    });
});
