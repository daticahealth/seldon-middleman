$(document).ready(function() {
    $("#slider").slick({
        arrows: false,
        // centerMode: true;
        dots: false,
        infinite: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        useCSS: false,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
