main.controller('iniController',['$http','$scope','$q','$window',function($http,$scope,$q,$window){

	
}]);

//-----------------------

main.config(function($stateProvider, $urlRouterProvider){
 
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('ini', {
      url: "/",
      views: {
        'ini': {
          'templateUrl': 'public/plantillas/ini.html',
          'controller': 'iniController'
        }
      }
    });
});
