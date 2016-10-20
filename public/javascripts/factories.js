var app = angular.module('imdb');

app.factory('movieFactory', ['$http', function($http) {
  var movie  = {
    url: 'http://www.omdbapi.com/?',
    movies: [],
    show: []
  };

  movie.getMovieData = function(newMovie) {
    var movieUrl = this.url + 's=' + encodeURIComponent(newMovie);
    return $http.get(movieUrl).then(function(data) {
      if (data.status === 200) {
        angular.copy(data.data.Search, movie.movies);
      }
    });
  };

  movie.getMovie = function(imdbID) {
    var movieUrl = this.url + 'i=' + imdbID;
    return $http.get(movieUrl).then(function(data) {
      if (data.status === 200) {
        angular.copy(data.data, movie.show);
      }
    });
  };

  return movie;
}]);
