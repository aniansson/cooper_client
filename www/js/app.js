// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ng-token-auth', 'ngResource'])
    .constant('API_URL', 'https://evening-hollows-68359.herokuapp.com/api/v1')

  .config(function ($authProvider, API_URL) {
    $authProvider.configure({
      apiUrl: API_URL
    });
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.about', {
      url:'/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about/about.html'
        }
      }
    })

    .state('app.test', {
      url:'/test',
      views: {
        'menuContent': {
          templateUrl: 'templates/test/test.html',
          controller: 'TestController'
        }
      }
    })

    .state('app.data', {
      url: '/data',
      params: {
        savedDataCollection: {}
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/test/data.html'
          controller: 'DataCtrl'
        }
      };
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});
