var app = angular.module('imdb', ['ui.router']);

app.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'mainCtrl',
        templateUrl: '/templates/index.html',
        data: {
          pageTitle: 'IMDB Search'
        }
      })
      .state('show', {
        url: '/show/{id}',
        controller: 'showCtrl',
        templateUrl: '/templates/show.html',
        data: {
          pageTitle: 'IMDB Show'
        },
        resolve: {
          post: ['$stateParams', 'movieFactory', function($stateParams, movieFactory) {
            return movieFactory.getMovie($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
