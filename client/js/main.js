//Use to instantiate app, connect factory & controllers and configure app.
(function(){
    // The module for Angular.
var app = angular.module('myBlog', ['ngRoute', 'ngResource']);
   
   // Adding in the route provider for the different views.
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
        // This is for the main page, to see all the blogs listed.
        .when('/', {
            templateUrl: 'views/blogposts.html',
            controller: 'BlogMain'
                })
        // This is for the view when submitting a new post, it contains a form for creating a new blog.        
        .when('/newpost', {
            templateUrl: 'views/newpost.html',
            controller: 'NewBlog'
                })
        // This view is for when a blog's 'Read more' button is clicked. It shows the individual blog content.        
        .when('/postcontent/:id', {
            templateUrl: 'views/postcontent.html',
            controller: 'PostContent'
        });
    }]);
})();