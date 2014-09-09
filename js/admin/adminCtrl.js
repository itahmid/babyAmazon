angular.module("adminApp")

  .controller("adminCtrl", function($scope, adminSvc, $routeParams, $location, $rootScope) {

    //Function to get my inventory from the server and set it to the view $scope.
    adminSvc.getInventory().success(function(inventory) {

      $scope.inventory = inventory;

    });

    //Function to get a single product from the inventory and set it to the view $scope.
    adminSvc.getItem($routeParams.productId).success(function(product) {

      $scope.product = product;

    });

    $scope.addProduct = function(product) {

      adminSvc.addInventoryItem({

        productName:product.name,
        productPrice:product.amount,
        productDescription:product.description,
        productImage:product.image


      });

      $location.path("/admin");

    };

    //Function to delete product from the inventory

    $scope.deleteProduct = function(productId) {

      adminSvc.deleteInventoryItem(productId);

    };

    $rootScope.$on("product:added", function() {

      $scope.inventory = adminSvc.getInventory();

    });

    $scope.editProduct = function(product) {

      adminSvc.editInventoryItem(product);

    };

    $rootScope.$on("product:deleted", function() {

      adminSvc.getInventory().success(function(inventory) {

        $scope.inventory = inventory;

      });

    });

    $rootScope.$on("product:edited", function() {

      $scope.inventory = adminSvc.getInventory();

    });
  });
