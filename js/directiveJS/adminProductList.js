angular.module("adminApp")

  .directive("adminProductList", function(adminSvc, $rootScope) {

    return {

      restrict:"E",
      templateUrl:"views/directiveViews/adminProductList.html",
      scope:{

        name:"@",
        price:"@",
        image:"@",
        description:"@",
        id:"@"

      },
      link:function(scope, element, attrs) {

        var databaseUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon";

        element.on("click", ".deleteProduct", function() {

          var productId = $(this).attr("data");
          console.log(productId);

          $.ajax({

            url:databaseUrl + "/" + productId,
            type:"DELETE"

          }).success(function(data) {

            $rootScope.$broadcast("product:deleted");

          });

        });

      }

    }

  });
