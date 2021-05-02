$(document).ready(function() {

    $( window ).scroll( function () {
        if ( $(document).scrollTop() > 150 ) {
          // Navigation Bar
          $('.navbar').removeClass('fadeIn');
          $('body').addClass('shrink');
          $('.navbar').addClass('animated fadeInDown');
        } else {
          $('.navbar').removeClass('fadeInDown');
          $('body').removeClass('shrink');
          $('.navbar').addClass('animated fadeIn');
        }
    });

    $('#mycarousel').carousel({ interval: 3500 });
    $('#carouselButton').click(function() {
       if($('#carouselButton').children('span').hasClass('fa-pause')) {
           $('#mycarousel').carousel('pause');
           $('#carouselButton').children('span').removeClass('fa-pause');
           $('#carouselButton').children('span').addClass('fa-play');
       }
       else if($('#carouselButton').children('span').hasClass('fa-play')) {
           $('#mycarousel').carousel('cycle');
           $('#carouselButton').children('span').removeClass('fa-play');
           $('#carouselButton').children('span').addClass('fa-pause');
       }
    });

    $('#loginButton').click(function() {
       $('#loginModal').modal('toggle');
    });
    $('#reserveButton').click(function() {
       $('#reserveModal').modal('toggle');
    });

 // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
});