'use strict';

/**
 * @ngdoc function
 * @name reviewsApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the reviewsApp
 */
angular.module('reviewsApp')
  .controller('RestaurantListCtrl', ['restaurant', function (restaurantService) {

    var vm = this;
    this.showFilters = false;
    this.showMap = false;

    restaurantService.getAllRestaurants().then(function(data){
        vm.allRestaurants = data.restaurants;
    });

    this.toggleFiltersDisplay = function(){
      vm.showFilters = !(vm.showFilters);
    };

    this.toggleMapDisplay = function(){
      vm.showMap = !(vm.showMap);
    };

  }]);
