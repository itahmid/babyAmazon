angular.module("productsApp")

  .controller("productsCtrl", function($scope, productsSvc, $routeParams, $location) {

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

    $scope.editProduct = function() {

      $location.path("/");

    };

  });
