function Contact(first, last,email) {
    this.firstName = first;
    this.lastName = last;
    this.email= email;
    this.addresses = [];
  }
  
  function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName + " " + this.email;
  }
  
  Address.prototype.fullAddress = function() {
    return this.street + ", " + this.city + ", " + this.county;
  }
  
  function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
  }

  
  
  
  
  $(document).ready(function(){
  
    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address">' +
                                   '<div class="form-group">' +
                                     '<label for="new-street">Street</label>' +
                                     '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                     '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-county">County</label>' +
                                     '<input type="text" class="form-control new-county">' +
                                   '</div>' +
                                 '</div>');
  
                                 
    });
  
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedEmail = $("input#Email").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedEmail);
  
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedCounty = $(this).find("input.new-county").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
        newContact.addresses.push(newAddress)
      });
  
      $("ul#contacts").append("<li><span class='contact'>" + "Thanks we will deliver your pizza in a hour" + "</span></li>");
  
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        // $(".email").text(newContact.email);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
      });
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input.new-street").val("");
      $("input.new-city").val("");
      $("input.new-county").val("");
  
  
      
  
    });
  });


$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  })

//   var finalCost = [];


//   function item(size,crust){
//     this.size= size;
//     this.crust=crust;
//     this.price = 0;

//   }

//   var pizaaSize =['large','medium', 'small'];
//   var pizaaCrust =['crisy','stuffed', 'glutted'];


//   item.prototype.costofpizza =function(){

//     if (this.size == pizaaSize[0]){
//       this.price +=1200;
//     }

//     else if(this.size == pizaaSize[1]){
//       this.price += 950;
//     }
//     else if(this.size == pizaaSize[2]){
//       this.price += 550;
//     }
   
//     if(this.crust == pizaaCrust[0]){
//       this.price +=150;
//     }

//     else if(this.crust == pizaaCrust[1]){
//       this.price +=100;
//     }
//     else if(this.crust == pizaaCrust[2]){
//       this.price +=100;
//     }


//   };
// // return this.price;

// item.prototype.totalCost = function() {
//   //created a variable shoppingCartTotal and initialized it to zero
//   var shoppingCartTotal = 0;
//   //this for loop iterates through the total order(s) to determine the number of order(s)
//   for (var order = 0; order < finalCost.length; order++) {
//     //shoppingCartTotal is now assigned a new value after the order(s) is added
//     shoppingCartTotal += totalOrderPrice[order];
//   }
//   return shoppingCartTotal;
// }

// $(document).ready(function() {
//   $("form#customized-pizza").submit(function(event) {
//     event.preventDefault();
//     var customSize = $("select#size").val();
//     var customcrust = $("select#crust").val();
//     var customtopping = $("input#topping").val();
//     var newPizzaOrder = new item(customSize, customcrust, customtopping);
//     newPizzaOrder.costOfPizza();
//     finalCost.push(newPizzaOrder.price);
//     $("#pizza-size").show();
//     $("#pizza-crust").show();
//     $("#pizza-topping").show();
//     $("#pizza-size").append("\t" + "\t" + customSize);
//     $("#pizza-crust").append("\t" + "\t" + customcrust);
//     $("#pizza-topping").append("\t" + "\t" + customtopping);
//     $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCost());
//   });
// });

var totalOrderPrice = [];
//------Constructor Placeorder created with it's properties----//
function Placeorder(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;
  // this.deliveryFee = 200;
}
//--Arrays to declare the pizzaSize,pizzaCrust and pizzaTopping to be used in the prototype CostOfPizza--//
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Bacon", "Chicken", "Beef", "Vegetables"];
//-Prototype CostOfPizza created to determine the price based on the three properties i.e size,cheese,topping-//
Placeorder.prototype.costOfPizza = function() {
  if (this.size === pizzaSize[0]) {
    this.price += 500;
  } else if (this.size === pizzaSize[1]) {
    this.price += 900;
  } else if (this.size === pizzaSize[2]) {
    this.price += 1200;
  }
  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.cheese === pizzaCrust[1]) {
    this.price += 200;
  } else if (this.cheese === pizzaCrust[2]) {
    this.price += 300;
  }
  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 300;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
  }
  return this.price;
}
//----End Of the Prototype CostOfPizza---//

Placeorder.prototype.costOfDelivery = function() {
  return this.deliveryFee;
}

//---Creation of prototype totalCost to be used to compute the total cost of all the orders--//
Placeorder.prototype.totalCost = function() {
  //created a variable shoppingCartTotal and initialized it to zero
  var shoppingCartTotal = 0;
  //this for loop iterates through the total order(s) to determine the number of order(s)
  for (var order = 0; order < totalOrderPrice.length; order++) {
    //shoppingCartTotal is now assigned a new value after the order(s) is added
    shoppingCartTotal += totalOrderPrice[order];
  }
  return shoppingCartTotal;
}
//----End Of the Prototype totalCost---//

//---Created and object called ShippingAddress---//
function ShippingAddress(cityName, cityAvenueName, cityStreetName, nameOfBuilding, phoneNumber) {
  this.cityName = cityName;
  this.cityAvenueName = cityAvenueName;
  this.CityStreetName = cityStreetName;
  this.nameOfBuilding = nameOfBuilding;
  this.phoneNumber = phoneNumber;
  this.deliveryAddress = (cityStreetName + " : \n" + cityAvenueName + " : \n" + nameOfBuilding + " : \n");
}
//----End Of the Constructor ShippingAddress---//

//--------------------------- END OF BUSINESS LOGIC DESIGNED AND TESTED------------------------//
//-------------------------------------USER INTERFACE LOGIC------------------------------------//
$(document).ready(function() {
  $("form#customized-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("select#size").val();
    var customcrust = $("select#crust").val();
    var customtopping = $("input#topping").val();
    var newPizzaOrder = new Placeorder(customSize, customcrust, customtopping);
    newPizzaOrder.costOfPizza();
    totalOrderPrice.push(newPizzaOrder.price);
    $("#pizza-size").show();
    $("#pizza-crust").show();
    $("#pizza-topping").show();
    $("#pizza-size").append("\t" + "\t" + customSize);
    $("#pizza-crust").append("\t" + "\t" + customcrust);
    $("#pizza-topping").append("\t" + "\t" + customtopping);
    $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCost());
  });
  // $("#checkout-btn").click(function() {
  //   location.reload();
  // });
});