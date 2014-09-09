angular.module("adminApp")

  .controller("adminCtrl", function($scope, adminProductSvc, $routeParams, $location, $rootScope) {

    $scope.inventory = adminProductSvc.getInventory();
    $scope.singleProduct = adminProductSvc.getItem($routeParams.index);

    $scope.addProduct = function(product) {

      adminProductSvc.addInventoryItem({

        productName:product.name,
        productPrice:product.amount,
        productDescription:product.description,
        productImage:product.image


      });

      $location.path("/");

    };

    $rootScope.$on("product:added", function() {

      $scope.inventory = adminProductSvc.getInventory();

    });

    $scope.editProduct = function() {

      adminProductSvc.editInventoryItem();
      $location.path("/");

    };

    $rootScope.$on("product:edited", function() {

      $scope.inventory = adminProductSvc.getInventory();

    });
  });
