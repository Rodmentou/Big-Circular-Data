var app = angular.module('big-circular-data', []);


app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

  $scope.postStop = function (stop) {
    stop.place='ect';
    $http.post('api/busstop/' + stop.place, stop)
      .then( function (res) {
        $scope.getStop('ect');
      }, function (res) {

      });
  };


  $scope.getStop = function (place) {
    $http.get('api/busstop/' + place)
      .then ( function (res) {
        $scope.stops = res.data;
      }, function (res) {

      });
  };


}]);
