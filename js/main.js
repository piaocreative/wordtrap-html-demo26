$( document ).ready( function() {

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.product-prev'),
      nextArrow: $('.product-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });   
  }

  if ( $( '.logos' ).length ) {
    $('.logos').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $('.product-prev'),
      nextArrow: $('.product-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    });   
  }

  if ( $('.top-product' ).length ) {
    $('.top-product').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.top-product-prev'),
      nextArrow: $('.top-product-next'),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        }
      ]
    });   
  }

  if ( $('.bestsellers' ).length ) {
    $('.bestsellers').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.bestseller-prev'),
      nextArrow: $('.bestseller-next'),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            dots: false,
          }
        }
      ]
    });   

    $(".top-product-slick").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".top-product-pages").children(".current").text("0"+i);
  });
  }

  if ( $('.portfolios' ).length ) {
    $('.portfolios').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          }
        }
      ]
    });  
  }

  if ( $('.testimonials' ).length ) {
    $('.testimonials').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.testimonial-prev'),
      nextArrow: $('.testimonial-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          }
        }
      ]
    });  
  }

  if ( $('.posts' ).length ) {
    $('.posts').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.post-prev'),
      nextArrow: $('.post-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          }
        }
      ]
    });   

    $(".posts").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".pagenation").children(".current").text("0"+i);
    });
  }

  if ( $( '.banner-products' ).length ) {
    $('.banner-products').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode:true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });   
  }

});