// Logic for page actions here. 
// This is a list of all the controllers which handle page content.

// This controller handles the main 'index.html' file. Which is just the content at the top with the two buttons.
// This content is available from every 'view'
var controllers = angular.module('myBlog');

controllers.controller('Home', ['$scope', '$location', function($scope , $location){
    // This function if for the 'Home' button, which sets the location path back to home.
    $scope.buttonOne = function() {
        $location.path('/');
    };
    // This function is called when the 'New Blog' button is clicked. 
    // It routes you to the 'newpost.html' page to submit a new blog.
    $scope.buttonTwo = function() {
        $location.path('/newpost');
    };
}]);

// This controller handles the contents of the 'blogposts.html' file.
controllers.controller('BlogMain',[ '$scope', '$location', 'myFactory', function($scope , $location, myFactory){
    // This is nonsense and was just used to make sure the controller was connected properly.
    $scope.message = 'Hellooooo!';
    // This function 'gets' all the blogs to be displayed on the main page.
    $scope.getFromServer = function(){
        myFactory.query().$promise.then(function(blogs){
            $scope.blogpost = blogs;
         }),
         // This is to display an error in case the request fails. 
         // It should display the following message as well as the error occuring.
       function(err) {
        console.log('Something isnt working you genius');
        console.error(err);
    };
    };
}]);

// This controller handles the contents of the 'newpost.html' file.
controllers.controller('NewBlog',[ '$scope', '$location', 'myFactory', function($scope , $location, myFactory){
    // Also nonsense to confirm this controller was connected properly.
    $scope.message = 'Where is the form?';
    // This function is called when the 'Submit' button is clicked. It sends the content to the server.
    $scope.sendToServer = function(){
     myFactory.save($scope.blog, function(){
         // This was added so that after the submit button is clicked the page returns to the main page automatically.
         // This was requested in the project directions.
            $location.path('/');
     }); 
    };  
}]);

// This controller handles the contents of the 'postcontent.html' file.
controllers.controller('PostContent',[ '$scope', 'myFactory', '$routeParams', function($scope , myFactory, $routeParams){
       var blogId = $routeParams.id;
       // Tells the factory get the blog specified to post its entire content.
       myFactory.get({id: blogId}).$promise.then(function(blogs){
           // Logs the blog as an object to the console.(No reason behind this, just my preference.)
           console.log(blogs);
           // Binds it to $scope so that it can be displayed in the view.
          $scope.blog = blogs; 
       }),
       // In case the request fails this will log the message to the console as well ad the error occuring.
       function(err) {
        console.log('Something isnt working you genius');
        console.error(err);
    };
}]);

