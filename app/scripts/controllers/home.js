'use strict';

var app =angular.module('sniprApp');

app.controller('HomeCtrl', function ($scope, snippets) {
    $scope.snippets = snippets;
});
