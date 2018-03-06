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

    console.log($stateParams.id);
   	restaurantService.getRestaurantById($stateParams.id).then(function(restaurant){
   		vm.data = restaurant;
   	});


  }]);
