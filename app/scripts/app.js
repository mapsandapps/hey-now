'use strict';

/**
 * @ngdoc overview
 * @name heyApp
 * @description
 * # heyApp
 *
 * Main module of the application.
 */
angular
  .module('heyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'times.tabletop'
  ])
  .config(function ($routeProvider, TabletopProvider) {
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/16h3X1Z9Mxc9EwXYay2HaW9rsU3YBPOu6vPgyqPGAcf8/pubhtml',
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          tabletopData: 'Tabletop'
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
