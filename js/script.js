wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
// phone 
const input = document.querySelector("#demo");
intlTelInput(input, {
    utilsScript: "intl-tel-input-master (1)/build/js/utils.js"
});
// niv 
$(window).load(function() {
  
  $('#slider').nivoSlider();
  
  });
  

// slik //


$('.demo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '40px',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        autoplay: true,
       autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  

});
// mix 
var mixer = mixitup('#hello', {
  animation: {
      duration: 300
  }
});


$(document).ready(function(){
  $(".content").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 2).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("FHIM ADNAN").addClass("noContent");
    }
  });
  
})



// counter 
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// pralax 
// $('.parallax-window').parallax({imageSrc: 'images/bg2.jpeg'});
// $('.parallax-window').parallax({imageSrc: 'images/bg1.jpeg'});

$(document).ready(function()
{
    // aos
    AOS.init({
        duration: 400,
        easing: 'slide-up',
    });

   /**
     * Demo 4
     */
   var spiral = function (t)
   {
       var s = t + 1.0;

       return {
           x: 300.0 + 50.0 * s * Math.cos(2.0 * Math.PI * s - 0.5 * Math.PI),
           y: 300.0 + 50.0 * s * Math.sin(2.0 * Math.PI * s - 0.5 * Math.PI)
       };
   };

   $('#text4').curvedText({
       curve:    spiral,
       domain:   [0.0, 3.0],
       viewport: { x: 0.0, y: 0.0, width: 600.0, height: 600.0 }
   });


});
  