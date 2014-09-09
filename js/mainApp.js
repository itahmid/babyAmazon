angular.module("babyAmazon", ["ngRoute", "adminApp"])

  .config(function($routeProvider) {

    $routeProvider

      .when("/", {

        templateUrl:"views/user/userHome.html",
        controller:"homeCtrl"

      })

      .when("/expandedProduct/:productId", {

        templateUrl:"views/user/expandedProduct.html",
        controller:"homeCtrl"

      })

      .otherwise({

        redirectTo:"/"

      });

  });
