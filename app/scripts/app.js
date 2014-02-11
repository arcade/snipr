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
        data: {
            title: 'Home'
        },
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('add', {
        url: 'add',
        data: {
            title: 'Add Snippet'
        },
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
    });
});

app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.state = $state.$current;
    });
});

