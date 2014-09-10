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

    var userShoppingCart = [];

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
