angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, adminSvc, $rootScope, $routeParams) {

    //Function to get my inventory from the server and set it to the view $scope.
    adminSvc.getInventory().success(function(inventory) {

      $scope.inventory = inventory;

    });

    //Function to get a single product from the inventory and set it to the view $scope.
    adminSvc.getItem($routeParams.productId).success(function(product) {

      $scope.product = product;

    });

    //Function to add adminSvc.userShoppingCart to the view $scope.
    $scope.userShoppingCart = adminSvc.userShoppingCart;

    //Function to add an item to the shopping cart.

    $scope.addToShoppingCart = function(product) {

      adminSvc.userShoppingCart.push({

        productName:product.productName,
        productImage:product.productImage,
        productQuantity:Number(product.productQuantity),
        productPrice:product.productPrice,
        productDescription:product.productDescription,
        productTotal:(Number(product.productQuantity) * product.productPrice)

      });

    };

    $scope.checkoutTotal = function() {

      var total = "";

      for (var i = 0; i < adminSvc.userShoppingCart.length; i ++) {

        return total += adminSvc.userShoppingCart[i].productTotal;

      };

    };

//$rootScope listeners to re-render page when a CRUD event occurs//
    $rootScope.$on("product:deleted", function() {

      adminSvc.getInventory().success(function(inventory) {

        $scope.inventory = inventory;

      });

    });

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


  });
