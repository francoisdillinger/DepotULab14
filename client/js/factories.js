// The action to call the local API should be here

var app = angular.module('myBlog');

// This is the factory with the local host's address for when a 'GET' or 'POST' is submitted.
app.factory('myFactory', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id')
}]);


