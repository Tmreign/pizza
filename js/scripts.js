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
  
  
  
  
  
  $(document).ready(function() {
  
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
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
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
    
  });