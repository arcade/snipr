var app = angular.module('sniprApp');

app.controller('AddCtrl', function ($scope, $state, snippets) {
    $scope.languages = {
        'javascript': 'JavaScript',
        'coffee': 'CoffeeScript',
        'c': 'C',
        'cpp': 'C++',
        'cs': 'C#',
        'java': 'Java',
        'rust': 'Rust'
    };

    $scope.addSnippet = function (snippet) {
        snippets.$add(snippet);
        $state.transitionTo('home');
    };
});
