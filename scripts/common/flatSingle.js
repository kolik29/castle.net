function flatMap(){var a=$(window).outerWidth(),e=$(".map-desktop"),t=$(".map-1366");a<1370?(e.removeAttr("name"),t.attr("name","image-map")):a>1366&&(t.removeAttr("name"),e.attr("name","image-map"))}$(".plan__flat-1").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__red").css("opacity",1),$(".plan__flat-2").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__orange").css("opacity",1),$(".plan__msg").css({opacity:0,"z-index":-1}),$(".plan__booked").css({opacity:1,"z-index":3})}),$(".plan__red, .plan__orange").css("opacity",0)}),$(".plan__flat-3").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__msg").css({opacity:0,"z-index":-1}),$(".plan__free, .sidebar-left__info").css("opacity",1)}).mouseleave(function(){$(".plan__free, .sidebar-left__info").css("opacity",0)}).on("click",function(a){a.preventDefault(),$(".content").hide(),$(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"),$("#flat").toggleClass("flat__tabs-item--active"),$("#flat-content").fadeIn(),$(".background__stage").hide(),$(".background__flat").fadeIn(1e3),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-furniture"),$(".flat__tagline").addClass("flat__tagline--active")}),$(".sidebar-left__cat-item").on("click",function(){$(".sidebar-left__cat-item").not(this).removeClass("sidebar-left__cat-item--active"),$(this).toggleClass("sidebar-left__cat-item--active"),$(this).hasClass("cat-flats-2")?($(".plan__map").css("opacity",0),$(".plan__flats-2").css("opacity",1)):$(this).hasClass("cat-flats-3")?($(".plan__map").css("opacity",0),$(".plan__free").css("opacity",1)):($(".plan__map").css("opacity",0),$(".plan__clean").css("opacity",1))}),$(".flat__tabs-item").on("click",function(){$(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"),$(this).toggleClass("flat__tabs-item--active")}),$("#flat").on("click",function(){$("#size-img").hide(),$("#flat-img").show(),$(".background__stage").hide(),$(".background__flat").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-furniture")}),$("#stage").on("click",function(){$(".content").hide(),$("#size-img").hide(),$("#flat-img").show(),$("#stage-content").fadeIn(),$(".background__flat").hide(),$(".background__stage").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-furniture"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-stage")}),$("#size").on("click",function(){$("#flat-img").hide(),$("#size-img").show(),$(".background__stage").hide(),$(".background__flat").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-furniture"),$(".sidebar-right__loupe").addClass("loupe-sizes")}),$(".flat-coords area").mouseenter(function(){$(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color","hsla(31,36%,62%,.29)")}).mouseleave(function(){$(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color","transparent")}),flatMap(),$(window).resize(function(){flatMap()});

$(() => {
    $('body').on('click', '.js-select-floor', function() {
        $(this).addClass('sidebar-right__item--active').siblings().removeClass('sidebar-right__item--active');
        $('.js-sidebar-left[data-floor="' + $(this).data('floor-target') + '"]').removeClass('sidebar-left--hide').siblings().addClass('sidebar-left--hide');
        $('.js-plan[data-floor="' + $(this).data('floor-target') + '"]').removeClass('plan--hide').siblings().addClass('plan--hide');;
    })
    
    $('body').on('mouseover', '.js-plan-flat', function() {
        $('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').addClass('plan-flat-bg--show').siblings().removeClass('plan-flat-bg--show');
        
        $('.js-plan__msg').css({
            'opacity': '',
            'top': '',
            'left': ''
        });
        
        $('.sidebar-left__info').hide();

        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-free'))
            $('.sidebar-left__info[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').show();
        
        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-sold'))
            $('.plan__msg.plan__sold').css({
                'opacity': '1',
                'top': $(this).position().top + $(this).parent().position().top + ($(this).height() / 2),
                'left': $(this).position().left + $(this).parent().position().left + ($(this).width() / 2)
            })
        
        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-booked'))
            $('.plan__msg.plan__booked').css({
                'opacity': '1',
                'top': $(this).position().top + $(this).parent().position().top + ($(this).height() / 2),
                'left': $(this).position().left + $(this).parent().position().left + ($(this).width() / 2)
            })
    })
    
    $('body').on('mousemove', function(e) {
        if (!$(e.target).hasClass('js-plan-flat') && $(e.target).closest('js-plan-flat').length == 0) {
            if (!$(e.target).hasClass('js-plan__msg') && !$(e.target).parent().hasClass('js-plan__msg')) {
                $('.js-plan__msg').css({
                    'opacity': ''
                });
                
                $('.sidebar-left__info').hide();
                
                $('.js-plan-flat-bg').removeClass('plan-flat-bg--show');
            }
        }
    })
    
    $('.js-plan-flat--free').on('click', function() {
        $('.flat-content[data-floor="' + $(this).closest('.js-plan').data('floor') + '"][data-plan-flat="' + $(this).data('plan-flat-target') + '"]').fadeIn();
        $('#stage-content').hide();
        $('.flat__tagline').addClass('flat__tagline--active');
        $('.js-plan-flat__img').hide();
        $('.js-plan-flat__img[data-type-img="flat"]').show();
        $('.js-flat__tabs-item').removeClass('flat__tabs-item--active');
        $('.js-flat__tabs-item[data-type="flat"]').addClass('flat__tabs-item--active');
    })

    $('.js-flat__tabs-item').click(function() {
        if ($(this).data('type') == 'stage') {
            $('.flat-content').hide();
            $('#stage-content').fadeIn();
            $('.flat__tagline').removeClass('flat__tagline--active');
        } else {
            $('.js-plan-flat__img').hide();
            $('.js-plan-flat__img[data-type-img="' + $(this).data('type') + '"]').show();
        }
    })
})