'use strict';

/**
 * @ngdoc function
 * @name heyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heyApp
 */
angular.module('heyApp')
  .controller('MainCtrl', function (tabletopData) {
    this.responses = tabletopData[0]['Form Responses 1'].elements;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
