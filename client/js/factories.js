//The action to call the local API should be here

var app = angular.module('myBlog');
app.factory('myFactory', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id')
}]);


