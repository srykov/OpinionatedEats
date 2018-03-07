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

    restaurantService.getAllRestaurants().then(function(data){
        vm.allRestaurants = data.restaurants;
      });

    const showFilters = document.getElementById('showFilters');
    const filters = document.querySelector('.filters');

    showFilters.addEventListener('click', function(){
      filters.classList.toggle('active');
    });

    const showMap = document.getElementById('showFilters');
    const map = document.getElementById('map');
    showMap.addEventListener('click', function(){
      map.classList.toggle('active');
    });

  }]);
