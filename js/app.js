$(document).ready(function(){
    $('.top-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
		draggable: true,
        prevArrow: '<button type="button" class="slick-prev fa fa-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fa fa-arrow-right"></button>',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
			centerMode: true,
            draggable: true,
          }
        }
        ]
    });
})