var app = angular.module('sniprApp');

app.controller('AddCtrl', function ($scope, $state, snippets) {
    $scope.languages = {
        'js': 'JavaScript',
        'coffee': 'CoffeeScript',
        'c': 'C',
        'cpp': 'C++',
        'csharp': 'C#',
        'java': 'Java',
        'rs': 'Rust'
    };

    $scope.addSnippet = function (snippet) {
        snippets.$add(snippet);
        $state.transitionTo('home');
    };
});
