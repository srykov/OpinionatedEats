'use strict';

/**
 * @ngdoc function
 * @name reviewsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the reviewsApp
 */
angular.module('reviewsApp')
  .controller('DetailCtrl', ['$stateParams', 'restaurant', function ($stateParams, restaurantService) {

    var vm = this;

   	restaurantService.getRestaurantById($stateParams.id).then(function(restaurant){
   		vm.data = restaurant;
   	});

  }]);