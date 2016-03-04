'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
      function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

          $urlRouterProvider
              .otherwise('/app/home');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'View/app.html'
              })
              .state('app.home', {
                  url: '/home',
                  templateUrl: 'View/Home.html'

              })
           .state('app.borrow', {
               url: '/borrow',
               templateUrl: 'View/borrow.html',
               // use resolve to load other dependences
               resolve: {
                   deps: ['uiLoad',
                     function (uiLoad) {
                         return uiLoad.load(['scripts/js/controllers/borrowCtrl.js', 'scripts/js/factory/customerFactory.js']);
                     }]
               }

           })
           .state('app.partner', {
               url: '/partner',
               templateUrl: 'View/partner.html',
               // use resolve to load other dependences
               resolve: {
                   deps: ['uiLoad',
                     function (uiLoad) {
                         return uiLoad.load(['scripts/js/controllers/partnerCtrl.js', 'scripts/js/services/customerService.js']);
                     }]
               }

           })

      }
    ]
  )
.factory('Page', function () {
    var title = 'default';
    return {
        title: function () {
            return title;
        },
        setTitle: function (newTitle) { title = newTitle }
    };
});
