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

    /// OWL CAROUSEL

      $('.owl-carousel').owlCarousel({
        mouseDrag:false,
        loop:true,
        margin:2,
        nav:true,
        responsive:{
          0:{
          items:1
          },
          600:{
          items:1
          },
          1000:{
          items:3
          }
        }
      });

      function owlPrev(id) {
        $active = $(id + ' .owl-item .item.show');
        $(id + ' .owl-item .item.show').removeClass('show');
        $(id + ' .owl-item .item').removeClass('next');
        $(id + ' .owl-item .item').removeClass('prev');
        $active.addClass('next');
        if($active.is('.first')) {
          $(id + ' .owl-item .last').addClass('show');
          $(id + ' .first').addClass('next');
          $(id + ' .owl-item .last').parent().prev().children('.item').addClass('prev');
        }
        else {
          $active.parent().prev().children('.item').addClass('show');
          if($active.parent().prev().children('.item').is('.first')) {
            $(id + ' .owl-item .last').addClass('prev');
          }
          else {
            $(id + ' .owl-item .show').parent().prev().children('.item').addClass('prev');
          }
        }
      }

      function owlNext(id) {
        $active = $(id + ' .owl-item .item.show');
        $(id + ' .owl-item .item.show').removeClass('show');
        $(id + ' .owl-item .item').removeClass('next');
        $(id + ' .owl-item .item').removeClass('prev');
        $active.addClass('prev');
        if($active.is('.last')) {
          $(id + ' .owl-item .first').addClass('show');
          $(id + ' .owl-item .first').parent().next().children('.item').addClass('prev');
        }
        else {
          $active.parent().next().children('.item').addClass('show');
          if($active.parent().next().children('.item').is('.last')) {
            $(id + ' .owl-item .first').addClass('next');
          }
          else {
            $(id + ' .owl-item .show').parent().next().children('.item').addClass('next');
          }
        }
      }

      $('.owl-prev').click(function() {
        $ID = $(this).parent().parent().attr('id');
        $elmID = '#' + $ID;
        owlPrev($elmID);
      });
        
      $('.owl-next').click(function() {
        $ID = $(this).parent().parent().attr('id');
        $elmID = '#' + $ID;
        owlNext($elmID);
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