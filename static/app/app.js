angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ) {
    $urlRouterProvider.otherwise('/');

    //Setup states (routes)
    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    })
    .state('watchState', {
      url: '/watch/:id',
      component: 'videoComp'
    })
    .state('editState', {
      url: '/edit/:id',
      component: 'videoComp'
    })
    .state('creditState', {
      url: '/credit',
      component: 'creditComp'
    });

    //Removes # symbol for our routes
    $locationProvider.html5Mode(true);

  }
]);
