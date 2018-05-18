angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('fortniteMedia.highlights', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/highlights.html',
        controller: 'highlightsCtrl'
      }
    }
  })

  .state('fortniteMedia', {
    url: '/side-menu21',
    templateUrl: 'templates/fortniteMedia.html',
    controller: 'fortniteMediaCtrl'
  })

  .state('fortniteMedia.myHighlights', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myHighlights.html',
        controller: 'myHighlightsCtrl'
      }
    }
  })

  .state('fortniteMedia.updates', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/updates.html',
        controller: 'updatesCtrl'
      }
    }
  })

  .state('fortniteMedia.youTubeChannels', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/youTubeChannels.html',
        controller: 'youTubeChannelsCtrl'
      }
    }
  })

  .state('fortniteMedia.twitchStreamers', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/twitchStreamers.html',
        controller: 'twitchStreamersCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')


});