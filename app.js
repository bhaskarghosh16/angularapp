(function (){
  'use strict';
angular.module('AppAngular',[])
.controller('GameEnListController',GameEnListController)
.controller('GameListController',GameListController)
.service('GameService',GameService);
GameEnListController.$inject=['GameService'];

function GameEnListController(GameService){
  alert('adding');
  var games = this;
  games.name ="";
  games.year ="";
  games.addGame = function(){

    GameService.addGame(games.name,games.year);
    games.name ="";
    games.year ="";
  };
}
GameListController.$inject=['GameService'];
function GameListController (GameService){
  var showList = this;
  showList.allGames = GameService.getGames();
}

function GameService(){
  var service = this;
  var allGames = [];
  service.addGame = function (gname, gyear){
    var game = {
      name : gname ,
      year : gyear
    };
    allGames.push(game);
  };
  service.getGames = function(){
    return allGames;

  };
}
/*.controller('AppAngularController',function($scope){
  $scope.gName = "";
  $scope.totalNumeric = 0;
  $scope.displayNumeric = function(){
    var total = calculateNumeric($scope.gName);
    $scope.totalNumeric = total;
  }

  function calculateNumeric(gName){

    var totalStringValue = 0;
    for (var i =0;i<gName.length;i++){
      totalStringValue+=gName.charCodeAt(i);
    }

    return totalStringValue;
  }

})

.controller('DIController',DIController);

function DIController($scope,$filter){
  $scope.name ="Bhaskar";
$scope.upper = function (){
    var up = $filter('uppercase');
    $scope.name = up($scope.name);

  };
}
.controller('ImageFlipController',ImageFlipController)
.filter('batman',BatmanFilter);

var gameList = [{
  name: "Uncharted 1",
  year : "2007"
},
{
  name : "Uncharted 2",
  year : "2009"
},
{
  name : "Uncharted 3",
  year : "2012"
}];
function ImageFlipController($scope,$filter,batmanFilter){
  $scope.hero = "batman";
  $scope.tagLine = "I am the night!";
  $scope.gameList = gameList;
$scope.flipHero = function (){
    $scope.hero ="superman";
    $scope.tagLine = $filter('uppercase')($scope.tagLine);
  }

  $scope.sayMessage =  function (){

    //$scope.tagLine = $filter('uppercase')($scope.tagLine);
    $scope.tagLine = batmanFilter($scope.tagLine);
  }

  $scope.addGame =  function (){

  var newGame = {
    name : $scope.gameName,
    year : $scope.gameYear
  };
    $scope.gameList.push(newGame);
    $scope.gameName ="";
    $scope.gameYear ="";
  }
}


function BatmanFilter(){ // Filter factory function
  return function (input){
    input = input || "";
    return input.replace("night","batman");
  }
}*/


})();
