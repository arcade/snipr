var app = angular.module('sniprApp');

app.service('firebase', function(firebaseUrl) {
    if (!firebaseUrl) {
        throw new Error('Please specify the firebaseUrl in your app bootstrap');
    }

    firebaseRef = new Firebase(firebaseUrl);

    this.add = function (obj) {
        forebaseRef.push(obj);
    };
});
