angular.module("productsApp")

  .factory("productsSvc", function() {

    var _inventory = [

    {
      productName:"Baby Einstein Take Along Tunes",
      productPrice:9.99,
      productImage:"http://ecx.images-amazon.com/images/I/41szCbN2t5L.jpg",
      productDescription:"Promote music appreciation and auditory development by introducing your little one to baby-friendly versions of classical masterpieces by Mozart, Vivaldi, Chopin and Rossini with the Baby Einstein take along Tunes. A large, easy to press button allows your baby to toggle through 7 high quality and enjoyable classical melodies at home, or for on-the-go fun. This baby's version of an MP3 player has colorful lights that dance across the screen to enhance each entertaining melody and promote visual perception."
    },
    {
      productName:"Baby Banana Bendable Training Toothbrush",
      productPrice:8.49,
      productImage:"http://ecx.images-amazon.com/images/I/71HAEsnA5SL._SL1500_.jpg",
      productDescription:"The flexible infant baby banana brush is the ideal infant training toothbrush that was invented by a mom-hygienist. The fun banana shape and soft texture are the perfect introduction and make brushing a fun experience as early as 3-4 months. It is made of the highest quality silicone and is compliant with the highest government standards. Because of its unique flexibility, it is much safer than traditional infant training toothbrushes and decreases risk of mouth injury. The wide banana peel handles provide an easy to grasp surface as infants learn to manipulate the brush in their mouth. The soft silicone can help sooth sore gums and it is dishwasher safe and freezer friendly. Parental supervision recommended."
    },
    {
      productName:"Vulli Sophie the Giraffe Teether",
      productPrice:25,
      productImage:"http://ecx.images-amazon.com/images/I/719tMZknq6L._SL1500_.jpg",
      productDescription: "Sophie the Giraffe, full of discoveries and activities to awaken baby's senses. Sight: The dark and contrasting spots all over Sophie the Giraffe's body provide visual stimulation and make her easily recognizable to baby. She soon becomes a familiar and reassuring object. Hearing: Her squeaker keeps baby amused and stimulates his hearings. Taste: Sophie the Giraffe is very flexible and has lots of parts for baby to chew like ears, horns, legs. She is perfect for soothing baby's sore gum when teething and is completely safe. Made of 100% natural rubber and food paint. Touch: Sophie the Giraffe is perfect for baby's small hands. She is very light and her long legs and neck are easy for baby to grip. She is very soft to touch, stimulating soothing physiological and emotional responses. Smell: The singular scent of natural rubber makes Sophie the Giraffe very special and easy for your child to identify. Sophie is Phthalates and BPA free."
    },
    {
      productName:"Summer Infant Contoured Changing Pad Amazon Frustration Free Packaging",
      productPrice:18,
      productImage:"http://ecx.images-amazon.com/images/I/81%2Bev0VHJHL._SL1500_.jpg",
      productDescription:"The Contoured Changing Pad is designed to offer baby ultimate comfort and offer parents easy cleaning. This pad measures 32\" x 16\" x 4\" and fits almost any change table or dresser. Its high walls help prevent baby from rolling too far in either direction. A safety belt attaches over baby's mid-section and a security strap keeps the pad attached to the furniture. The top vinyl is PEVA and phthalate/PVC free, and double layered for maximum durability."
    }

    ];

    var getInventory = function() {

      return _inventory;

    };

    var getItem = function(index) {

      return _inventory[index];

    }

    var addInventoryItem = function(newItem) {

      _inventory.push(newItem);

    };

    return {

      getInventory:getInventory,
      addInventoryItem:addInventoryItem,
      getItem:getItem

    }

  });
