//Use to instantiate app, connect factory & controllers and configure app.
(function(){
var app = angular.module('myBlog', ['ngRoute', 'ngResource']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/blogposts.html',
            controller: 'BlogMain'
                })
        .when('/newpost', {
            templateUrl: 'views/newpost.html',
            controller: 'NewBlog'
                })
        .when('/postcontent/:id', {
            templateUrl: 'views/postcontent.html',
            controller: 'PostContent'
        });
    }]);
})();