

const app = angular.module('rutaIApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'vistas/inicio.html',
        controller:'rutaIController'
    })
    .when('/mapa',{
        templateUrl:'vistas/mapa.html',
        controller:'mapaController'
    })
    .when('/test',{
        templateUrl:'vistas/test.html',
        controller:'testController'
    })


});
app.controller('rutaIController',function($scope){
  

    $scope.irMapa=function(){
        window.location.href="#!/mapa";
    }
    $scope.irInicion=function(){
        window.location.href="#!/";
    }
})