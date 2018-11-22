
$(document).ready(function() {
    $("#carousel").gsp_carousel({
        item: 3,
        loop: true,
        showUpcoming: false,
        upcomingPercent: 40,
        slideMove: 1,
        mode: "slide",
        showCounter: false,
        counterText: "Showing {current} / {total}",
        autoWidth: false,
        slideMargin: 6,
        addClass: "my-carousel",
        useCSS: true,
        speed: 400,
        auto: true,
        pauseOnHover: false,
        pause: 2000,
        controls: true,
        prevHtml: "",
        nextHtml: "",
        adaptiveHeight: false,
        pager: true,
        gallery: false,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [{
            breakpoint: 1600,
            settings: {
                item: 3,
                slideMargin: 6
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 3,
                slideMargin: 6
            }
        }]
    });
