angular.module("productsApp")

  .controller("productsCtrl", function($scope, productsSvc, $routeParams, $location, $rootScope) {

    $scope.inventory = productsSvc.getInventory();
    $scope.singleProduct = productsSvc.getItem($routeParams.index);

    $scope.addProduct = function(product) {

      productsSvc.addInventoryItem({

        productName:product.name,
        productPrice:product.amount,
        productDescription:product.description,
        productImage:product.image


      });

      $location.path("/");

    };

    $rootScope.$on("product:added", function() {

      $scope.inventory = productsSvc.getInventory();

    });

    $scope.editProduct = function() {

      productsSvc.editInventoryItem();
      $location.path("/");

    };

    $rootScope.$on("product:edited", function() {

      $scope.inventory = productsSvc.getInventory();

    });
  });
