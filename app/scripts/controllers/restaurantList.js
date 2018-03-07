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
        vm.neighborhoodFilter = filterString;
      } else if(filterType === 'cuisineType'){
        vm.cuisineFilter = filterString;
      }

      if(vm.neighborhoodFilter){
        this.restaurantsToDisplay = this.allRestaurants.filter(function(restaurant){
          if(restaurant.neighborhood === vm.neighborhoodFilter){
              return true;
          }
        });
      }

      if(vm.cuisineFilter){
        this.restaurantsToDisplay = this.restaurantsToDisplay.filter(function(restaurant){
          if(restaurant.cuisineType === vm.cuisineFilter){
            return true;
          }
        });
      }
      console.log(vm.restaurantsToDisplay);
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
