'use strict';

/**
 * @ngdoc service
 * @name reviewsApp.restaurant
 * @description
 * # restaurant
 * Service in the reviewsApp.
 */
angular.module('reviewsApp')
  .service('restaurant', function () {


   		this.getRestaurantData = function(){
   			return fetch('/data/restaurants.json')
        .then(function(response){
          return response.json();
        }).then(function(data){
          return data;
        });
   		};

   		this.getAllRestaurants = function(){
			  return this.getRestaurantData().then(function(data){
          return data.restaurants;
        });
   		};

      this.getNeighborhoods = function(){
        return this.getAllRestaurants().then(function(restaurants){
          let neighborhoodSet = new Set();
          restaurants.forEach(function(restaurant){
            neighborhoodSet.add(restaurant.neighborhood);
          });
          const neighborhoods = Array.from(neighborhoodSet);
          return neighborhoods;
        });
      };

      this.getCuisineTypes = function(){
        return this.getAllRestaurants().then(function(restaurants){
          let cuisineTypeSet = new Set();
          restaurants.forEach(function(restaurant){
            cuisineTypeSet.add(restaurant.cuisineType);
          });
          const cuisineTypes = Array.from(cuisineTypeSet);
          return cuisineTypes;
        });
      };

   		this.getRestaurantById = function(id) {
   			return this.getAllRestaurants().then(function(data){
   				const restaurant = data.restaurants.find(function(element){
   					return element.id === id;
   				});
   				return restaurant;
   			});
		};

  });
