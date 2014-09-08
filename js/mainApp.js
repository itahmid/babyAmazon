angular.module("babyAmazon", ["ngRoute", "productsApp"])

  .config(function($routeProvider) {

    $routeProvider

      .when("/", {

        templateUrl:"views/home.html",
        controller:"homeCtrl"

      })

      .otherwise({

        redirectTo:"/"

      });

  });
