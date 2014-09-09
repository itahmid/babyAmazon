angular.module("adminApp", ["ngRoute"])

  .config(function($routeProvider) {

    $routeProvider

      .when("/admin", {

        templateUrl:"views/admin/adminHome.html",
        controller:"adminCtrl"

      })

      .when("/admin/newProduct", {

        templateUrl:"views/admin/newProduct.html",
        controller:"adminCtrl"

      })

      .when("/admin/editProduct/:id", {

        templateUrl:"views/admin/editProduct.html",
        controller:"adminCtrl"

      });

  });
