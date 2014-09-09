angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, productsSvc) {

    $scope.inventory = productsSvc.getInventory();

    $scope.deleteProduct = function(index) {

      productsSvc.deleteInventoryItem(index);


    };

    $rootScope.$on("product:deleted", function() {

      $scope.inventory = productsSvc.getInventory();

    });


  });
