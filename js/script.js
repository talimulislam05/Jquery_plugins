AOS.init();


// JavaScript
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

  // AOS.init();



// JQUERY
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2002
    });
    // $(selector).countMe(delay,speed)
    $(".count").countMe(40,65);



    // slick slider start
    $('.wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      $('.responsive').slick({
        dots: false,
        infinite: true,
        arows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arows: false,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arows: false,
            }
          }
        
        ]
      });
    // slick slider end

    



    

})