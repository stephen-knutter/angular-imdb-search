var app = angular.module('imdb');


app.controller('mainCtrl', ['$scope', 'movieFactory', function($scope, movieFactory) {
  $scope.movie = {};
  $scope.movies = movieFactory.movies;

  $scope.fetchMovie = function() {
    if (!$scope.movie.title) return false;

    movieFactory.getMovieData($scope.movie.title);
  }
}]);

app.controller('showCtrl', ['$scope', 'movieFactory', function($scope, movieFactory) {
  $scope.show = movieFactory.show;
}]);
