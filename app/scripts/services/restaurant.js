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

  		//var vm = this;
   		this.getRestaurantData = function(){
   			return fetch('/data/restaurants.json').then(function(response){
   				return response.json();
   			});
   		};

   		this.getAllRestaurants = function(){
			return this.getRestaurantData().then(function(data){
   				return data;
   			});
   		};


   		this.getRestaurantById = function(id) {
   			return this.getAllRestaurants().then(function(data){
   				const restaurant = data.restaurants.find(function(element){
   					return element.id === id;
   				});
   				console.log(restaurant);
   				return restaurant;
   			});
		};

  });
