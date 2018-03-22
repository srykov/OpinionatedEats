'use strict';

/**
 * @ngdoc overview
 * @name reviewsApp
 * @description
 * # reviewsApp
 *
 * Main module of the application.
 */
angular
	.module('reviewsApp', ['ui.router','ngMap','ngAria'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/all.html',
				controller: 'RestaurantListCtrl as data'
			})
			.state('detail', {
				url: '/restaurant/:id',
				templateUrl: 'views/restaurant.html',
				controller: 'DetailCtrl as restaurant'
			});
	}]);

