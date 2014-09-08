angular.module("productsApp")

  .controller("productsCtrl", function($scope, productsSvc, $routeParams, $log) {

    $scope.inventory = productsSvc.getInventory();
    $scope.singleProduct = productsSvc.getItem($routeParams.index);

    console.log($scope.singleProduct);

  });
