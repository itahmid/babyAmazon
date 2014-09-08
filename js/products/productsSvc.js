angular.module("productsApp")

  .factory("productsSvc", function() {

    var inventory = [];

    var getInventory = function() {

      return inventory;

    };

  });
