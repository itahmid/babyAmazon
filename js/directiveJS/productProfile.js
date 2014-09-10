angular.module("babyAmazon")

  .directive("productProfile", function() {

    return {

      restrict:"EA",
      templateUrl:"views/directiveViews/productProfile.html",
      scope: {

        name:"@",
        price:"@",
        image:"@",
        description:"@",
        id:"@"

      },
      link: function(scope, element, attrs) {

        element.on("click", "button", function() {

          var productId = $(this).attr("data");
          var databaseUrl = "http://tiy-fee-rest.herokuapp.com/collections/babyAmazon";
          var quantity = $(".quantity").val();

          $.ajax({

            url:databaseUrl + "/" + productId,
            type:"GET",


          }).success(function(data) {

            var shoppingCartItem = {

              name:data.productName,
              price:data.productPrice,
              quantity:Number(quantity),
              image:data.productImage

            }

            $.ajax({

              url:"http://tiy-fee-rest.herokuapp.com/collections/babyAmazon_shoppingCart",
              type:"POST",
              data: shoppingCartItem

            }).success(function(data) {

              console.log(data);

            });

          });

        });

      }

    };

  });
