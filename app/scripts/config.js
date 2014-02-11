var app = angular.module('sniprApp');

app.config(function (snippetsProvider) {
    // Set the firebase url for the snippetsProvider
    snippetsProvider.setUrl('https://snipr.firebaseio.com');
});

