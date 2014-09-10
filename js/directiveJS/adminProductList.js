angular.module("adminApp")

  .directive("adminProductList", function() {

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

        element.on("click", ".deleteProduct", function() {

          var productId = $(this).attr("data");
          var databaseUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon";
          console.log(productId);

          $.ajax({

            url:databaseUrl + "/" + productId,
            type:"DELETE"

          }).success(function(data) {

            console.log(data);

          });

        });

      }

    }

  });
