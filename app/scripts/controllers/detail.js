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
    this.googleMapsUrl ='https://maps.googleapis.com/maps/api/js?key=AIzaSyAPDYsk6lPaqe-0lYkKqfibUPCuO6dS22Q';

   	restaurantService.getRestaurantById($stateParams.id).then(function(restaurant){
   		$scope.$apply(function(){
   			vm.data = restaurant;
   		});
   	});

  }]);