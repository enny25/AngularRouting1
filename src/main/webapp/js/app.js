var app = angular.module('viewApp', ['ngRoute']);
// Route Provider Start
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "views/home.html",
      controller: "HomeController"
    })
    .when("/personlist", {
      templateUrl: "views/personlist.html",
      controller: "ProductController"
    })
    .when("/details/:index", {
      templateUrl: "views/details.html",
      controller: "ProductController"
    })
    .otherwise({
      redirectTo: "/home"
    })
})
// Route Provider End

// Controllers Start
app.controller("HomeController",function($scope){
  $scope.home = "Home View for this site";
})

app.controller('ProductController', function ($scope, $routeParams) {
  $scope.people = "Our Persons";

  $scope.persons = [
{id: 1,name: "Jens",age : 18}
 ,{id: 2,name: "Peter",age : 23}
 ,{id: 3,name: "Hanne",age : 23}
];

  if (angular.isDefined($routeParams.index)) {
    var i = $routeParams.index;
    $scope.person = $scope.persons[i];
  }
});
// Controllers End


