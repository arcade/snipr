var app = angular.module('sniprApp');

app.provider('snippets', function() {
    var firebaseUrl = '';
    this.setUrl = function (url) {
        firebaseUrl = url;
    }

    this.$get = ['$firebase', function ($firebase) {
        return $firebase(new Firebase([firebaseUrl, 'snippets'].join('/')));
    }];
});

