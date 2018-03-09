'use strict';

/**
 * @ngdoc function
 * @name reviewsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the reviewsApp
 */
angular.module('reviewsApp')
  .controller('DetailCtrl', ['$scope', '$stateParams', 'restaurant', function ($scope, $stateParams, restaurantService) {

    var vm = this;
    this.showMap = false;
    this.showSchedule = false;
    this.todaysHours = '';
    this.currentDayOfWeek = '';
    this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    this.googleMapsUrl ='https://maps.googleapis.com/maps/api/js?key=AIzaSyAPDYsk6lPaqe-0lYkKqfibUPCuO6dS22Q';

   	restaurantService.getRestaurantById($stateParams.id).then(function(restaurant){
   		const now = new Date();
   		const today = vm.daysOfWeek[now.getDay()];

   		const todaysSchedule = restaurant.operatingHours.find(function (element){
   		 	return element.day === today;
   		});

   		$scope.$apply(function(){
   			vm.todaysHours = todaysSchedule.hours;
   			vm.currentDayOfWeek = today;
   			vm.data = restaurant;
   		});

   	});

   	this.toggleMapDisplay = function(){
      vm.showMap = !(vm.showMap);
    };

   	this.toggleScheduleDisplay = function(){
      vm.showSchedule = !(vm.showSchedule);
    };

  }]);