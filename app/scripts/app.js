'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
 var app = angular.module('webApp', [
 	'ngSanitize',
 	'ui.router',
 	'angularModalService',
 	'com.2fdevs.videogular',
 	'com.2fdevs.videogular.plugins.controls',
 	'com.2fdevs.videogular.plugins.overlayplay',
 	'com.2fdevs.videogular.plugins.poster'
 	]);
 app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
 	$urlRouterProvider.otherwise('/home');
 	$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

 	$stateProvider

 	.state('home', {
 		url: '/home',
 		templateUrl: 'views/home.html'
 	})

 	.state('people', {
 		url: '/people',
 		templateUrl: 'views/people.html',
 		controller: 'MainCtrl',
 		controllerAs: 'main'
 	});

 });