
$(document).ready(function(){

	// $('.autoplay').slick({
	//   slidesToShow: 2,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   autoplaySpeed: 4000,
	// });
	$('.single-item').slick();
	
	$('.responsive').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});