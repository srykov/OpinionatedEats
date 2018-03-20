'use strict';

/**
 * @ngdoc function
 * @name reviewsApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the reviewsApp
 */
angular.module('reviewsApp')
  .controller('RestaurantListCtrl', ['$scope', 'restaurant', function ($scope, restaurantService) {

    var vm = this;
    this.showFilters = false;
    this.showMap = false;
    this.neighborhoodFilter = null;
    this.cuisineFilter = null;
    this.googleMapsUrl='https://maps.googleapis.com/maps/api/js?key=AIzaSyAPDYsk6lPaqe-0lYkKqfibUPCuO6dS22Q';

    restaurantService.getAllRestaurants()
    .then(function(restaurants){
        $scope.$apply(function(){
          vm.allRestaurants = restaurants;
          vm.restaurantsToDisplay = restaurants;
        });
    });

    this.getNeighborhoods = function(){

      if(vm.restaurantsToDisplay !== undefined){
        let neighborhoodSet = new Set();
        vm.restaurantsToDisplay.forEach(function(restaurant){
          neighborhoodSet.add(restaurant.neighborhood);
        });
        const neighborhoods = Array.from(neighborhoodSet);
        return neighborhoods;
      }
    };

    this.getCuisineTypes = function(){

      if(vm.restaurantsToDisplay !== undefined){
        let cuisineTypeSet = new Set();
        vm.restaurantsToDisplay.forEach(function(restaurant){
          cuisineTypeSet.add(restaurant.cuisineType);
        });
        const cuisines = Array.from(cuisineTypeSet);
        return cuisines;
      }
    };

    this.cuisineTypes = restaurantService.getCuisineTypes()
    .then(function(cuisineTypes){
      vm.cuisineTypes = cuisineTypes;
    });


    /*
     * Remove the filter string for the specified filter.
     */
    this.removeFilter = function(filterType){
      if(filterType === 'neighborhood'){
        vm.neighborhoodFilter = null;
      } else if(filterType === 'cuisineType'){
        vm.cuisineFilter = null;
      }

      this.filterResults();

      if(!vm.neighborhoodFilter && !vm.cuisineFilter){
        this.toggleFiltersDisplay();
      }
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

      //reset results
      vm.restaurantsToDisplay = vm.allRestaurants;

      //apply neighborhood filter
      if(vm.neighborhoodFilter){
        vm.restaurantsToDisplay = vm.allRestaurants.filter(function(restaurant){
          if(restaurant.neighborhood === vm.neighborhoodFilter){
              return true;
          }
        });
      }

      //apply cuisine type filter
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
    this.toggleNeighborhoodFilterDisplay = function(){
      vm.showNeighborhoodFilter = !(vm.showNeighborhoodFilter);
      vm.showCuisineFilter = false;
      vm.showMap = false;
    };

    this.toggleCuisineFilterDisplay = function(){
      vm.showCuisineFilter = !(vm.showCuisineFilter);
      vm.showNeighborhoodFilter = false;
      vm.showMap = false;
    };


    this.toggleMapDisplay = function(){
      vm.showMap = !(vm.showMap);
      vm.showNeighborhoodFilter = false;
      vm.showCuisineFilter = false;
    };


  }]);
