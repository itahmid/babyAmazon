angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, adminSvc, $rootScope, $routeParams, $log) {

    //Function to get my inventory from the server and set it to the view $scope.
    adminSvc.getInventory().success(function(inventory) {

      $scope.inventory = inventory;

    });

    //Function to get my shopping cart from the server and set it to the view $scope.
    adminSvc.getShoppingCart().success(function(shoppingCart) {

      $scope.shoppingCart = shoppingCart;

    });

    //Function to get a single product from the inventory and set it to the view $scope.
    adminSvc.getItem($routeParams.productId).success(function(product) {

      $scope.product = product;

    });

    //Function to add comment into the product.
    $scope.addComment = function(comment) {

      adminSvc.getItem($routeParams.productId).success(function(product) {

        $scope.product = product;
        $scope.product.productComments.push({

          commentAuthor:comment.author,
          commentDescription:comment.description,
          commentDate:new Date()

        });

        adminSvc.editInventoryItem(product);

      });

      $scope.comment = {};

    };

    $scope.updateCart = function() {

      $rootScope.$broadcast("shoppingCart:updated");

    };

//$rootScope listeners to re-render page when a CRUD event occurs//

    $rootScope.$on("product:edited", function() {

      adminSvc.getInventory().success(function(inventory) {

        $scope.inventory = inventory;

      });

    });

    $rootScope.$on("product:added", function() {

      adminSvc.getInventory().success(function(inventory) {

        $scope.inventory = inventory;

      });

    });

    $rootScope.$on("shoppingCart:updated", function() {

      adminSvc.getShoppingCart().success(function(shoppingCart) {

        $scope.shoppingCart = shoppingCart;

      });

    });

    $rootScope.$on("shoppingCart:deleted", function() {

      adminSvc.getShoppingCart().success(function(shoppingCart) {

        $scope.shoppingCart = shoppingCart;

      });

    });


  });
