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

    restaurantService.getAllRestaurants().then(function(data){
        vm.allRestaurants = data.restaurants;
    });

    this.toggleDisplayFilters = function(){
      vm.showFilters = !(vm.showFilters);
    };

    const showMap = document.getElementById('showFilters');
    const map = document.getElementById('map');
    showMap.addEventListener('click', function(){
      map.classList.toggle('active');
    });

  }]);
