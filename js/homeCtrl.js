angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, adminSvc, $rootScope, $routeParams, $log) {

    //Function to get my inventory from the server and set it to the view $scope.
    adminSvc.getInventory().success(function(inventory) {

      $scope.inventory = inventory;

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

    //Function to add adminSvc.userShoppingCart to the view $scope.
    $scope.userShoppingCart = adminSvc.userShoppingCart;

    //Function to add an item to the shopping cart.

    $scope.addToShoppingCart = function(product) {

      adminSvc.userShoppingCart.push({

        productName:product.name,
        productImage:product.image,
        productQuantity:Number(product.quantity),
        productPrice:product.price,
        productDescription:product.sescription

      });

      $rootScope.$broadcast("shoppingCart:updated");
      $log.info("shoppingCart:updated");

    };

    $scope.checkoutTotal = adminSvc.checkoutTotal();

    //Function to delete item from shopping cart.
    $scope.deleteProduct = function(productIndex) {

      $scope.userShoppingCart.splice(productIndex, 1);
      $rootScope.$broadcast("shoppingCart:deleted");

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

      $scope.checkoutTotal = adminSvc.checkoutTotal();

    });

    $rootScope.$on("shoppingCart:deleted", function() {

      $scope.checkoutTotal = adminSvc.checkoutTotal();

    });


  });
