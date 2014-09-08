angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, productsSvc) {

    $scope.inventory = productsSvc.getInventory();

    $scope.deleteProduct = function(index) {

      productsSvc.deleteInventoryItem(index);

    };


  });
