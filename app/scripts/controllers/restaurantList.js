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
    this.neighborhoods = ['Brooklyn', 'Manhattan', 'Queens'];
    this.cuisineTypes = ['Asian', 'BBQ', 'Pizza'];

    vm.allRestaurants  = restaurantService.getAllRestaurants()
    .then(function(restaurants){
        vm.allRestaurants = restaurants;
    });

    this.neighborhoods = restaurantService.getNeighborhoods()
    .then(function(neighborhoods){
      console.log(neighborhoods);
      vm.neighborhoods = neighborhoods;
    });


    this.toggleFiltersDisplay = function(){
      vm.showFilters = !(vm.showFilters);
      vm.showMap = false;
    };

    this.toggleMapDisplay = function(){
      vm.showMap = !(vm.showMap);
      vm.showFilters = false;
    };


  }]);
