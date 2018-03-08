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
    this.neighborhoodFilter = '';
    this.cuisineFilter = '';

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


    /*
     * Remove the filter string for the specified filter.
     */
    this.removeFilter = function(filterType){
      if(filterType === 'neighborhood'){
        vm.neighborhoodFilter = '';
      } else if(filterType === 'cuisineType'){
        vm.cuisineFilter = '';
      }

      if(!vm.neighborhoodFilter && !vm.cuisineFilter){
        this.toggleFiltersDisplay();
      }

      this.filterResults();
    };


    /*
     * Set the filter string for the specified filter.
     */
    this.setFilter = function(filterType, filterString){
      if(filterType === 'neighborhood'){
        vm.neighborhoodFilter = filterString;
      } else if(filterType === 'cuisineType'){
        vm.cuisineFilter = filterString;
      }

      this.filterResults();
    };

    /*
     * Apply the filters to the restaurant results.
     */
    this.filterResults = function(){
      if(vm.neighborhoodFilter){
        vm.restaurantsToDisplay = vm.allRestaurants.filter(function(restaurant){
          if(restaurant.neighborhood === vm.neighborhoodFilter){
              return true;
          }
        });
      }

      if(vm.cuisineFilter){
        vm.restaurantsToDisplay = vm.restaurantsToDisplay.filter(function(restaurant){
          if(restaurant.cuisineType === vm.cuisineFilter){
            return true;
          }
        });
      }
    };

    /*
     * Open and close the filters
     */
    this.toggleFiltersDisplay = function(){
      this.showFilters = !(vm.showFilters);
      this.showMap = false;
    };

    this.toggleMapDisplay = function(){
      this.showMap = !(vm.showMap);
      this.showFilters = false;
    };


  }]);
