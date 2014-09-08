angular.module("productsApp", ["ngRoute"])

  .config(function($routeProvider) {

    $routeProvider

      .when("/newProduct", {

        templateUrl:"views/newProduct.html",
        controller:"productsCtrl"

      })

  });
