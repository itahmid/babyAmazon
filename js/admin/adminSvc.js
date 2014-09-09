angular.module("adminApp")

  .factory("adminSvc", function($rootScope, $log, $http) {

    var databaseUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon"

    var getInventory = function() {

      return $http.get(databaseUrl);

    };

    var getItem = function(id) {

      return $http.get(databaseUrl + "/" + id);

    }

    var addInventoryItem = function(newItem) {

      $http.post(databaseUrl, newItem).success(function(data) {

        $rootScope.$broadcast("product:added");
        $log.info("product:added");

      })

    };

    var editInventoryItem = function(product) {

      $http.put(databaseUrl + "/" + product._id, product).success(function(data) {

      $rootScope.$broadcast("product:edited");
      $log.info("product:edited");

      });

    };

    var deleteInventoryItem = function(id) {

      $http.delete(databaseUrl + "/" + id).success(function(data) {

        $rootScope.$broadcast("product:deleted");
        $log.info("product:deleted");

      });

    };

    //FUNCTIONS RELATING TO THE SHOPPING CART//

    var userShoppingCart = [{
    productName: "Munchkin 'White Hot' Duck Bath Toy",
    productPrice: 2.99,
    productQuantity: 3,
    productDescription: "Test the waters with America's #1 Safety Duck. No need to worry that your baby's bath water is too hot to handle. This adorable rubber ducky has our White Hot safety disc at the bottom that tells you when the water is too hot, then let's you know that it's safe to put your baby in. And, it's just the right size for little hands to hold and cuddle.",
    productImage: "http://ecx.images-amazon.com/images/I/71d-yPz2g6L._SX425_.jpg"
  }];

    var checkoutTotal = function() {

      var total = 0;

      for (var i = 0; i < userShoppingCart.length; i++) {

        var index = userShoppingCart[i];

        total += (index.productPrice * index.productQuantity);

      };

      return total;

    };

    return {

      getInventory:getInventory,
      getItem:getItem,
      addInventoryItem:addInventoryItem,
      editInventoryItem:editInventoryItem,
      deleteInventoryItem:deleteInventoryItem,
      userShoppingCart:userShoppingCart,
      checkoutTotal:checkoutTotal

    }

  });
