angular.module("babyAmazon")

  .directive("shoppingCart", function($rootScope) {

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

        var shoppingCartUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon_shoppingCart";

        element.on("click", ".removeFromCart", function() {

          var shoppingCartId = $(this).attr("data");

          $.ajax({

            url:shoppingCartUrl + "/" + shoppingCartId,
            type:"DELETE"

          }).success(function(response) {

            $rootScope.$broadcast("shoppingCart:updated")

          });

        });

        element.on("click", ".updateCart", function() {

          var shoppingCartId = $(this).attr("data");
          var updatedCart = {

            quantity:$(this).siblings(".shoppingCartInfo").children(".quantity").val()

          };

          console.log(updatedCart);

          $.ajax({

            url:shoppingCartUrl + "/" + shoppingCartId,
            type:"PUT",
            data:updatedCart

          }).success(function(data) {

            console.log(data);

          });

        });

      }

    };

  });
