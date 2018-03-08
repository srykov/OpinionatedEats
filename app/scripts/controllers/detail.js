'use strict';

/**
 * @ngdoc function
 * @name reviewsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the reviewsApp
 */
angular.module('reviewsApp')
  .controller('DetailCtrl', ['$scope', '$stateParams', 'restaurant', function ($scope, $stateParams, restaurantService) {

    var vm = this;

   	restaurantService.getRestaurantById($stateParams.id).then(function(restaurant){
   		$scope.$apply(function(){
   			vm.data = restaurant;
   		});
   	});

  }]);