var app = angular.module('sniprApp');

app.controller('ViewCtrl', function ($scope, $stateParams, snippets) {
    $scope.snippet = snippets.$child($stateParams.key);
});
