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

  // 	this.allRestaurants = [
  // 		{
  // 			id: 1,
  //   		name: 'Mission Chinese Food',
  //   		photograph: '1.jpg',
  //   		neighborhood: 'Manhattan',
  //   		address: '171 E Broadway, New York, NY 10002'
  //   	},
		// {
  // 			id: 2,
  //   		name: 'Emily',
  //   		photograph: '2.jpg',
  //   		neighborhood: 'Brooklyn',
  //   		address: '919 Fulton St, Brooklyn, NY 11238'
  //   	},
  //   	{
  //   		id: 3,
  //   		name: 'Kang Ho Dong Baekjeong',
  //   		photograph: '3.jpg',
  //   		neighborhood: 'Manhattan',
  //   		address: '1 E 32nd St, New York, NY 10016'
  //   	}
  // 	];

  }]);
