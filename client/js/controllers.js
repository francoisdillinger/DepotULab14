//Logic for page actions here. 

var controllers = angular.module('myBlog');

controllers.controller('Home', ['$scope', '$location', function($scope , $location){
    $scope.buttonOne = function() {
        $location.path('/');
    };
    $scope.buttonTwo = function() {
        $location.path('/newpost');
    };
}]);

controllers.controller('BlogMain',[ '$scope', '$location', 'myFactory', function($scope , $location, myFactory){
    $scope.message = 'Hellooooo!';
    $scope.getFromServer = function(){
        myFactory.query().$promise.then(function(blogs){
            $scope.blogpost = blogs;
         }),
       function(err) {
        console.log('Something isnt working you genius');
        console.error(err);
    };
    };
}]);

controllers.controller('NewBlog',[ '$scope', '$location', 'myFactory', function($scope , $location, myFactory){
    $scope.message = 'Where is the form?';
    $scope.sendToServer = function(){
     myFactory.save($scope.blog, function(){
            $location.path('/');
     }); 
    };  
}]);

controllers.controller('PostContent',[ '$scope', 'myFactory', '$routeParams', function($scope , myFactory, $routeParams){
       var blogId = $routeParams.id;
       myFactory.get({id: blogId}).$promise.then(function(blogs){
           console.log(blogs);
          $scope.blog = blogs; 
       }),
       function(err) {
        console.log('Something isnt working you genius');
        console.error(err);
    };
}]);

