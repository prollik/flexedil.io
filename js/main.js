$(function(){

    $(function(){
        if ( $(window).width() < 637 ) {

            $('.symptoms__slider').slick({

                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots:true,
                arrows:false,

                responsive:[{
                    breakpoint:430,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
                ]
            });
        }
    });


    if ( $(window).width() < 381 ) {

    $('.utility__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,

        infinite: true,
        dots:true,
        arrows:false
    });
    }


    $('.reviews__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

        arrows : true,
        infinite: true,
        dots:true,

        responsive:[{
            breakpoint:480,
            settings: {
                arrows: false
            },
        }
        ]

    });


    if ( $(window).width() < 1010 ) {


    $('.active__slider').slick({

        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots:true,
        arrows:false,

        responsive:[{
            breakpoint:1010,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },{
                breakpoint:740,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            }

            ,{
                breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            }
        ]
    });




    }



    



});