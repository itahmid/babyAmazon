angular.module("babyAmazon")

  .directive("shoppingCart", function() {

    return{

      restrict:"AE",
      templateUrl:"views/directiveViews/shoppingCartDirective.html",
      scope: {

        name:"@",
        quantity:"@",
        price:"@",
        image:"@",
        id:"@"

      },
      link: function(scope, element, attrs) {

        element.on("click", ".removeFromCart", function() {

          var shoppingCartId = $(this).attr("data");
          var shoppingCartUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon_shoppingCart";

          $.ajax({

            url:shoppingCartUrl + "/" + shoppingCartId,
            type:"DELETE"

          }).success(function(response) {

            console.log("Deleted");

          });

        });

      }

    };

  });
