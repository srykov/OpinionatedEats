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
    this.neighborhoodFilter = 'Queens';
    this.cuisineFilter = 'Mexican';
    this.filterType = 'neighborhood';

    vm.allRestaurants  = restaurantService.getAllRestaurants()
    .then(function(restaurants){
        vm.allRestaurants = restaurants;
        vm.restaurantsToDisplay = restaurants;
    });

    this.neighborhoods = restaurantService.getNeighborhoods()
    .then(function(neighborhoods){
      vm.neighborhoods = neighborhoods;
    });

    this.cuisineTypes = restaurantService.getCuisineTypes()
    .then(function(cuisineTypes){
      vm.cuisineTypes = cuisineTypes;
    });

    this.filterBy = function(filterType, filterString){
      if(filterType === 'neighborhood'){
        this.neighborhoodFilter = filterString;
      } else if(filterType === 'cuisineType'){
        this.cuisineFilter = filterString;
      }

      this.restaurantsToDisplay = this.allRestaurants.filter(function(restaurant){
        if( (vm.cuisineTypeFilter && (restaurant.cuisineType === vm.cuisineTypeFilter)) &&
            (vm.neighborhoodFilter && (restaurant.neighborhood === vm.neighborhoodFilter)) ){
            return true;
        }

      });
    };

    this.toggleFiltersDisplay = function(){
      this.showFilters = !(vm.showFilters);
      this.showMap = false;
    };

    this.toggleMapDisplay = function(){
      this.showMap = !(vm.showMap);
      this.showFilters = false;
    };


  }]);
