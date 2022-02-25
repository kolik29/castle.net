function flatMap(){var a=$(window).outerWidth(),e=$(".map-desktop"),t=$(".map-1366");a<1370?(e.removeAttr("name"),t.attr("name","image-map")):a>1366&&(t.removeAttr("name"),e.attr("name","image-map"))}$(".plan__flat-1").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__red").css("opacity",1),$(".plan__flat-2").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__orange").css("opacity",1),$(".plan__msg").css({opacity:0,"z-index":-1}),$(".plan__booked").css({opacity:1,"z-index":3})}),$(".plan__red, .plan__orange").css("opacity",0)}),$(".plan__flat-3").mouseenter(function(){$(".plan__map").css("opacity",0),$(".plan__msg").css({opacity:0,"z-index":-1}),$(".plan__free, .sidebar-left__info").css("opacity",1)}).mouseleave(function(){$(".plan__free, .sidebar-left__info").css("opacity",0)}).on("click",function(a){a.preventDefault(),$(".content").hide(),$(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"),$("#flat").toggleClass("flat__tabs-item--active"),$("#flat-content").fadeIn(),$(".background__stage").hide(),$(".background__flat").fadeIn(1e3),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-furniture"),$(".flat__tagline").addClass("flat__tagline--active")}),$(".sidebar-left__cat-item").on("click",function(){$(".sidebar-left__cat-item").not(this).removeClass("sidebar-left__cat-item--active"),$(this).toggleClass("sidebar-left__cat-item--active"),$(this).hasClass("cat-flats-2")?($(".plan__map").css("opacity",0),$(".plan__flats-2").css("opacity",1)):$(this).hasClass("cat-flats-3")?($(".plan__map").css("opacity",0),$(".plan__free").css("opacity",1)):($(".plan__map").css("opacity",0),$(".plan__clean").css("opacity",1))}),$(".flat__tabs-item").on("click",function(){$(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"),$(this).toggleClass("flat__tabs-item--active")}),$("#flat").on("click",function(){$("#size-img").hide(),$("#flat-img").show(),$(".background__stage").hide(),$(".background__flat").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-furniture")}),$("#stage").on("click",function(){$(".content").hide(),$("#size-img").hide(),$("#flat-img").show(),$("#stage-content").fadeIn(),$(".background__flat").hide(),$(".background__stage").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-furniture"),$(".sidebar-right__loupe").removeClass("loupe-sizes"),$(".sidebar-right__loupe").addClass("loupe-stage")}),$("#size").on("click",function(){$("#flat-img").hide(),$("#size-img").show(),$(".background__stage").hide(),$(".background__flat").fadeIn(),$(".sidebar-right__loupe").removeClass("loupe-stage"),$(".sidebar-right__loupe").removeClass("loupe-furniture"),$(".sidebar-right__loupe").addClass("loupe-sizes")}),$(".flat-coords area").mouseenter(function(){$(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color","hsla(31,36%,62%,.29)")}).mouseleave(function(){$(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color","transparent")}),flatMap(),$(window).resize(function(){flatMap()});


$(() => {
    let floors = [
        {
            flat: [
                {
                    rooms: 1,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 27%;clip-path: polygon(0 0, 88% 0, 88% 20%, 77% 20%, 76% 67%, 73% 70%, 68% 72%, 66% 73%, 56% 75%, 48% 73%, 41% 69%, 37% 62%, 36% 55%, 0% 55%);',
                    square: 83.99,
                    square_living: 42.55,
                    status: 'free',
                    number: 1,
                    square_info: [
                        [105, 'Коридор', '9.64'],
                        [106, 'Гостинная', '25.04'],
                        [107, 'Спальня', '17.51'],
                        [108, 'Кухня-столовая', '12.63'],
                        [109, 'Санузел', '3.39'],
                        [110, 'Санузел', '4.42'],
                        [111, 'Гардероб', '2.93'],
                        [112, 'Санузел', '2.95'],
                        [113, 'Лоджия', '5.45']
                    ]
                },
                {
                    rooms: 2,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 95.27,
                    square_living: 57.79,
                    status: 'free',
                    number: 2,
                    square_info: [
                        [114, 'Коридор', '5.87'],
                        [118, 'Кухня-столовая', '12.73'],
                        [120, 'Санузел', '2.38'],
                        [121, 'Санузел', '3.07'],
                        [119, 'Гардероб', '3.80'],
                        [122, 'Санузел', '4.00'],
                        [116, 'Спальня', '17.83'],
                        [115, 'Гостинная', '23.34'],
                        [117, 'Спальня', '16.62'],
                        [123, 'Лоджия', '2.49'],
                        [124, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 1,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(37% 0, 76% 0, 76% 17%, 86% 17%, 86% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 36% 26%);',
                    square: 95.55,
                    square_living: 57.79,
                    status: 'free',
                    number: 3,
                    square_info: [
                        [214, 'Коридор', '5.87'],
                        [215, 'Кухня-столовая', '12.73'],
                        [216, 'Санузел', '2.38'],
                        [217, 'Санузел', '3.07'],
                        [218, 'Гардероб', '3.80'],
                        [219, 'Санузел', '4.00'],
                        [220, 'Спальня', '17.83'],
                        [221, 'Гостинная', '23.24'],
                        [222, 'Спальня', '16.62'],
                        [223, 'Лоджия', '2.49'],
                        [224, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 2,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 95.55,
                    square_living: 57.79,
                    status: 'free',
                    number: 4,
                    square_info: [
                        [214, 'Коридор', '5.87'],
                        [215, 'Кухня-столовая', '12.73'],
                        [216, 'Санузел', '2.38'],
                        [217, 'Санузел', '3.07'],
                        [218, 'Гардероб', '3.80'],
                        [219, 'Санузел', '4.00'],
                        [220, 'Спальня', '17.83'],
                        [221, 'Гостинная', '23.24'],
                        [222, 'Спальня', '15.62'],
                        [223, 'Лоджия', '2.49'],
                        [224, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 1,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 96.68,
                    square_living: 58.57,
                    status: 'free',
                    number: 5,
                    square_info: [
                        [314, 'Коридор', '5.87'],
                        [315, 'Кухня-столовая', '13.45'],
                        [316, 'Санузел', '2.00'],
                        [317, 'Санузел', '3.07'],
                        [318, 'Гардероб', '3.80'],
                        [319, 'Санузел', '4.00'],
                        [320, 'Спальня', '17.83'],
                        [321, 'Гостинная', '23.24'],
                        [322, 'Спальня', '17.40'],
                        [323, 'Лоджия', '2.49'],
                        [324, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 2,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    status: 'sold',
                    number: 6
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 7,
                    square_info: [
                        [414, 'Коридор', '5.67'],
                        [415, 'Кухня-столовая', '13.43'],
                        [416, 'Санузел', '5.40'],
                        [417, 'Санузел', '3.00'],
                        [418, 'Гардероб', '3.80'],
                        [419, 'Санузел', '4.00'],
                        [420, 'Спальня', '17.83'],
                        [421, 'Гостинная', '23.24'],
                        [422, 'Спальня', '15.47'],
                        [423, 'Спальня', '17.35'],
                        [424, 'Лоджия', '2.49'],
                        [425, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 8,
                    square_info: [
                        [414, 'Коридор', '5.67'],
                        [415, 'Кухня-столовая', '13.43'],
                        [416, 'Санузел', '5.40'],
                        [417, 'Санузел', '3.00'],
                        [418, 'Гардероб', '3.80'],
                        [419, 'Санузел', '4.00'],
                        [420, 'Спальня', '17.83'],
                        [421, 'Гостинная', '23.24'],
                        [422, 'Спальня', '15.47'],
                        [423, 'Спальня', '17.35'],
                        [424, 'Лоджия', '2.49'],
                        [425, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 9,
                    square_info: [
                        [514, 'Коридор', '5.67'],
                        [515, 'Кухня-столовая', '13.43'],
                        [516, 'Санузел', '5.40'],
                        [517, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [519, 'Санузел', '4.00'],
                        [520, 'Спальня', '17.83'],
                        [521, 'Гостинная', '23.24'],
                        [522, 'Спальня', '15.47'],
                        [523, 'Спальня', '17.35'],
                        [524, 'Лоджия', '2.49'],
                        [525, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 10,
                    square_info: [
                        [514, 'Коридор', '5.67'],
                        [515, 'Кухня-столовая', '13.43'],
                        [516, 'Санузел', '5.40'],
                        [517, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [519, 'Санузел', '4.00'],
                        [520, 'Спальня', '17.83'],
                        [521, 'Гостинная', '23.24'],
                        [522, 'Спальня', '15.47'],
                        [523, 'Спальня', '17.35'],
                        [524, 'Лоджия', '2.49'],
                        [525, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 11,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостинная', '23.24'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 12,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостинная', '23.24'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 13,
                    square_info: [
                        [714, 'Коридор', '5.67'],
                        [715, 'Кухня-столовая', '13.43'],
                        [716, 'Санузел', '5.40'],
                        [717, 'Санузел', '3.00'],
                        [718, 'Гардероб', '3.80'],
                        [719, 'Санузел', '4.00'],
                        [720, 'Спальня', '17.83'],
                        [721, 'Гостинная', '23.24'],
                        [722, 'Спальня', '15.47'],
                        [723, 'Спальня', '17.35'],
                        [724, 'Лоджия', '2.49'],
                        [725, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 14,
                    square_info: [
                        [714, 'Коридор', '5.67'],
                        [715, 'Кухня-столовая', '13.43'],
                        [716, 'Санузел', '5.40'],
                        [717, 'Санузел', '3.00'],
                        [718, 'Гардероб', '3.80'],
                        [719, 'Санузел', '4.00'],
                        [720, 'Спальня', '17.83'],
                        [721, 'Гостинная', '23.24'],
                        [722, 'Спальня', '15.47'],
                        [723, 'Спальня', '17.35'],
                        [724, 'Лоджия', '2.49'],
                        [725, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 15,
                    square_info: [
                        [814, 'Коридор', '5.67'],
                        [815, 'Кухня-столовая', '13.43'],
                        [816, 'Санузел', '5.40'],
                        [817, 'Санузел', '3.00'],
                        [818, 'Гардероб', '3.80'],
                        [819, 'Санузел', '4.00'],
                        [820, 'Спальня', '17.83'],
                        [821, 'Гостинная', '23.24'],
                        [822, 'Спальня', '15.47'],
                        [823, 'Спальня', '17.35'],
                        [824, 'Лоджия', '2.49'],
                        [825, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 16,
                    square_info: [
                        [814, 'Коридор', '5.67'],
                        [815, 'Кухня-столовая', '13.43'],
                        [816, 'Санузел', '5.40'],
                        [817, 'Санузел', '3.00'],
                        [818, 'Гардероб', '3.80'],
                        [819, 'Санузел', '4.00'],
                        [820, 'Спальня', '17.83'],
                        [821, 'Гостинная', '23.24'],
                        [822, 'Спальня', '15.47'],
                        [823, 'Спальня', '17.35'],
                        [824, 'Лоджия', '2.49'],
                        [825, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 17,
                    square_info: [
                        [914, 'Коридор', '5.67'],
                        [915, 'Кухня-столовая', '13.43'],
                        [916, 'Санузел', '5.40'],
                        [917, 'Санузел', '3.00'],
                        [918, 'Гардероб', '3.80'],
                        [919, 'Санузел', '4.00'],
                        [920, 'Спальня', '17.83'],
                        [921, 'Гостинная', '23.24'],
                        [922, 'Спальня', '15.47'],
                        [923, 'Спальня', '17.35'],
                        [924, 'Лоджия', '2.49'],
                        [925, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 18,
                    square_info: [
                        [914, 'Коридор', '5.67'],
                        [915, 'Кухня-столовая', '13.43'],
                        [916, 'Санузел', '5.40'],
                        [917, 'Санузел', '3.00'],
                        [918, 'Гардероб', '3.80'],
                        [919, 'Санузел', '4.00'],
                        [920, 'Спальня', '17.83'],
                        [921, 'Гостинная', '23.24'],
                        [922, 'Спальня', '15.47'],
                        [923, 'Спальня', '17.35'],
                        [924, 'Лоджия', '2.49'],
                        [925, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 19,
                    square_info: [
                        [1014, 'Коридор', '5.67'],
                        [1015, 'Кухня-столовая', '13.43'],
                        [1016, 'Санузел', '5.40'],
                        [1017, 'Санузел', '3.00'],
                        [1018, 'Гардероб', '3.80'],
                        [1019, 'Санузел', '4.00'],
                        [1020, 'Спальня', '17.83'],
                        [1021, 'Гостинная', '23.24'],
                        [1022, 'Спальня', '15.47'],
                        [1023, 'Спальня', '17.35'],
                        [1024, 'Лоджия', '2.49'],
                        [1025, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 20,
                    square_info: [
                        [1014, 'Коридор', '5.67'],
                        [1015, 'Кухня-столовая', '13.43'],
                        [1016, 'Санузел', '5.40'],
                        [1017, 'Санузел', '3.00'],
                        [1018, 'Гардероб', '3.80'],
                        [1019, 'Санузел', '4.00'],
                        [1020, 'Спальня', '17.83'],
                        [1021, 'Гостинная', '23.24'],
                        [1022, 'Спальня', '15.47'],
                        [1023, 'Спальня', '17.35'],
                        [1024, 'Лоджия', '2.49'],
                        [1025, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 2,
                    style: 'width: 52.4%;height: 96.5%;left: 0.1%;top: 3%;clip-path: polygon(26% 0, 76% 0, 76% 17%, 100% 17%, 100% 28%, 86% 28%, 85% 47%, 77% 47%, 77% 88%, 74% 93%, 72% 95%, 66% 99%, 56% 100%, 48% 99%, 41% 95%, 37% 91%, 36% 82%, 0% 81%, 0% 26%, 26% 26%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 21,
                    square_info: [
                        [1114, 'Коридор', '5.67'],
                        [1115, 'Кухня-столовая', '13.43'],
                        [1116, 'Санузел', '5.40'],
                        [1117, 'Санузел', '3.00'],
                        [1118, 'Гардероб', '3.80'],
                        [1119, 'Санузел', '4.00'],
                        [1120, 'Спальня', '17.83'],
                        [1121, 'Гостинная', '23.24'],
                        [1122, 'Спальня', '15.47'],
                        [1123, 'Спальня', '17.35'],
                        [1124, 'Лоджия', '2.49'],
                        [1125, 'Лоджия', '3.42']
                    ]
                },
                {
                    rooms: 3,
                    style: 'width: 59.4%;height: 79%;left: 39.1%;top: 2%;clip-path: polygon(66% 0, 100% 0, 100% 100%, 0% 100%, 0 58%, 9% 58%, 9% 33%, 66% 33%);',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 22,
                    square_info: [
                        [1114, 'Коридор', '5.67'],
                        [1115, 'Кухня-столовая', '13.43'],
                        [1116, 'Санузел', '5.40'],
                        [1117, 'Санузел', '3.00'],
                        [1118, 'Гардероб', '3.80'],
                        [1119, 'Санузел', '4.00'],
                        [1120, 'Спальня', '17.83'],
                        [1121, 'Гостинная', '23.24'],
                        [1122, 'Спальня', '15.47'],
                        [1123, 'Спальня', '17.35'],
                        [1124, 'Лоджия', '2.49'],
                        [1125, 'Лоджия', '3.42']
                    ]
                }
            ]
        },
    ]

    let html = '';

    floors.forEach((item, i) => {
        html += left_side_tempalte(i + 1, item.flat);
        html += plan_template(i + 1, item.flat);
    })

    html += `
    <div class="sidebar-right" data-aos="fade-left" data-aos-delay="800">
        <ul class="sidebar-right__list">`;

    for (let i = floors.length - 1; i >= 0; i--)
        html += right_side_template(i + 1, floors[i]['white_box'] ? floors[i]['white_box'] : false);

    html += `
        </ul>
    </div>`;

    $('#stage-content .content__inner').append(html)

    let flat_content = '';

    floors.forEach((floor, floor_id) => {
        floor.flat.forEach((flat, flat_id) => {
            flat_content += flat_template(floor_id + 1, flat, flat_id + 1);
        })
    })

    $('#stage-content').after(flat_content);
})

$(() => {
    $('body').on('click', '.js-select-floor', function() {
        $(this).addClass('sidebar-right__item--active').siblings().removeClass('sidebar-right__item--active');
        $('.js-sidebar-left').hide();
        $('.js-plan').hide();
        $('.js-sidebar-left[data-floor="' + $(this).data('floor-target') + '"]').show().removeClass('aos-animate');
        $('.js-plan[data-floor="' + $(this).data('floor-target') + '"]').show().removeClass('aos-animate');

        setTimeout(() => {
            $('.js-sidebar-left[data-floor="' + $(this).data('floor-target') + '"]').addClass('aos-animate');
            $('.js-plan[data-floor="' + $(this).data('floor-target') + '"]').addClass('aos-animate');
        }, 1);
    })

    let in_appartment = false;
    
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

        in_appartment = true;
    })
    
    $('body').on('mousemove', function(e) {
        if (in_appartment)
            if (!$(e.target).hasClass('js-plan-flat') && $(e.target).closest('js-plan-flat').length == 0) {
                if (!$(e.target).hasClass('js-plan__msg') && !$(e.target).parent().hasClass('js-plan__msg')) {
                    $('.js-plan__msg').css({
                        'opacity': ''
                    });
                    
                    $('.sidebar-left__info').hide();
                    
                    $('.js-plan-flat-bg').removeClass('plan-flat-bg--show');

                    in_appartment = false;
                }
            }
    })

    $('body').on('click', '.js-plan-flat--free', function() {
        $('.flat-content[data-floor="' + $(this).closest('.js-plan').data('floor') + '"][data-plan-flat="' + $(this).data('plan-flat-target') + '"]').fadeIn();
        $('#stage-content').hide();
        $('.flat__tagline').addClass('flat__tagline--active');
        $('.js-plan-flat__img').hide();
        $('.js-plan-flat__img[data-type-img="flat"]').show();
        $('.js-flat__tabs-item').removeClass('flat__tabs-item--active');
        $('.js-flat__tabs-item[data-type="flat"]').addClass('flat__tabs-item--active');
    })

    $('body').on('click', '.js-flat__tabs-item', function() {
        if ($(this).data('type') == 'stage') {
            $('.flat-content').hide();
            $('#stage-content').fadeIn();
            $('.flat__tagline').removeClass('flat__tagline--active');
        } else {
            $('.js-plan-flat__img').hide();
            $('.js-plan-flat__img[data-type-img="' + $(this).data('type') + '"]').show();
        }
    })

    $('body').on('click', '.js-sidebar-left__cat-item', function() {
        $(this).toggleClass('sidebar-left__cat-item--active').siblings().removeClass('sidebar-left__cat-item--active');
        $('.js-plan-flat-bg').removeClass('plan-flat-bg--show');
        $('.js-plan-flat-bg[data-plan-rooms="' + $(this).data('target-rooms') + '"]').addClass('plan-flat-bg--show');
    })
})

function right_side_template(floor, white_box = false) {
    return `
    <li class="sidebar-right__item js-select-floor` + (floor == 1 ? ' sidebar-right__item--active' : '') + `" data-floor-target="${floor}">
        <p class="sidebar-right__name">${floor} Этаж</p>`
        + (white_box ? '<p class="sidebar-right__descr">с отделкой White box</p>' : '') +
        `<a class="sidebar-right__link" href="https://kolik29.github.io/castle.net/documents/flat-single/floors/${floor}/4К для продажи.pdf" download>
            <span class="sidebar-right__link-icon"
            ><img src="./img/common/pdf.svg" alt="" />
            </span>
            <span class="sidebar-right__link-text"
            >Скачать план этажа</span
            >
        </a>
    </li>`;
}

function plan_template(floor, flat) {
    console.log(flat)

    return `
    <div class="plan js-plan" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000" data-floor="${floor}" ` + (floor == 1 ? ' style="display: block;"' : '') + `>
        <div class="plan-flat-bg` + (flat[0].status == 'sold' ? ' plan-flat-bg--is-sold' : '') + (flat[0].status == 'free' ? ' plan-flat-bg--is-free' : '') + (flat[0].status == 'booked' ? ' plan-flat-bg--is-booked' : '') + ` js-plan-flat-bg" data-plan-flat="1" data-plan-rooms="${flat[0].rooms}" style="
            -webkit-mask-image: url(https://kolik29.github.io/castle.net/img/flat-single/floors/${floor}/plan-floor-1_bg.svg);
        "></div>
        <div class="plan-flat-bg` + (flat[0].status == 'sold' ? ' plan-flat-bg--is-sold' : '') + (flat[0].status == 'free' ? ' plan-flat-bg--is-free' : '') + (flat[0].status == 'booked' ? ' plan-flat-bg--is-booked' : '') + ` js-plan-flat-bg" data-plan-flat="2" data-plan-rooms="${flat[1].rooms}" style="
            -webkit-mask-image: url(https://kolik29.github.io/castle.net/img/flat-single/floors/${floor}/plan-floor-2_bg.svg);
        "></div>
        <img
            id="plan-img"
            src="https://kolik29.github.io/castle.net/img/flat-single/floors/${floor}/plan-floor.svg"
        />
        <div 
            class="plan-flat js-plan-flat` + (flat[0].status == 'free' ? ' js-plan-flat--free' : '') + `"
            data-plan-flat-target="1"
            style="${flat[0].style}"
        ></div>
        <div 
            class="plan-flat js-plan-flat` + (flat[0].status == 'free' ? ' js-plan-flat--free' : '') + `"
            data-plan-flat-target="2"
            style="${flat[1].style}"
        ></div>
        <div class="sidebar-right__loupe loupe-stage">
            <div class="sidebar-right__loupe-circle">
                <div class="sidebar-right__loupe-line1"></div>
                <div class="sidebar-right__loupe-line2"></div>
            </div>
            <div class="sidebar-right__loupe-line3"></div>
        </div>
    </div>`;
}

function left_side_tempalte(floor, flat) {
    let __flat = '';

    flat.forEach(item => {
        __flat += `
        <div class="sidebar-left__cat-item js-sidebar-left__cat-item" data-target-rooms=${item.rooms}>
            <p>
                <span>${item.rooms}</span>
                Комнатная
            </p>
        </div>
        `
    })

    let __flat_info = '';

    flat.forEach((item, i) => {
        __flat_info += `
        <div class="sidebar-left__info js-sidebar-left__info" data-plan-flat="${i + 1}">
            <div class="sidebar-left__info-sizes">
                <p><span>${item.rooms}</span>` + (item.rooms == 1 ? 'Комната' : 'Команты') + `</p>
                <p><span>${item.square} м²</span>Общая площадь</p>
            </div>
            <div class="sidebar-left__info-prices">
                <p><span>15 046 140 * ₽</span>*При единовременной оплате</p>
                <p><span>138 000 ₽</span>Стоимость за м²</p>
            </div>
        </div>
        `
    })

    return `
    <div class="sidebar-left js-sidebar-left" data-aos="fade-right" data-aos-delay="800" data-floor="${floor}" ` + (floor == 1 ? ' style="display: block"' : '') + `>
        <div class="sidebar-left__housing">
            <p class="sidebar-left__housing-name">Корпус</p>
            <p class="sidebar-left__housing-num">4</p>
        </div>
        <div class="sidebar-left__cat">
            <p class="sidebar-left__cat-title">Категория:</p>
            <div class="sidebar-left__cat-wrapper">
                ${__flat}
            </div>
        </div>
        <div class="sidebar-left__status">
            <p class="sidebar-left__status-title sidebar-left__cat-title">
                Статус объекта:
            </p>
            <div class="sidebar-left__status-wrapper">
                <div class="sidebar-left__status-item">
                    <div class="sidebar-left__status-box sidebar-left__status-box--green"></div>
                    <div class="sidebar-left__status-name">В продаже</div>
                </div>
                <div class="sidebar-left__status-item">
                    <div
                        class="sidebar-left__status-box sidebar-left__status-box--red"
                    ></div>
                    <div class="sidebar-left__status-name">Продано</div>
                </div>
                <div class="sidebar-left__status-item">
                    <div
                        class="sidebar-left__status-box sidebar-left__status-box--yellow"
                    ></div>
                    <div class="sidebar-left__status-name">Забронировано</div>
                </div>
            </div>
        </div>
        ${__flat_info}
    </div>`
}

function flat_template(floor, flat, flat_id) {
    let rooms = '';

    if (flat.square_info)
        flat.square_info.forEach(item => {
            rooms += `
            <li class="flat__elements-item">
                <p class="flat__elements-num">${item[0]}</p>
                <p class="flat__elements-name">${item[1]}</p>
                <p class="flat__elements-value">${item[2]} м²</p>
            </li>
            `
        })

    return `
    <section class="flat-content content flat" data-floor="${floor}" data-plan-flat="${flat_id}">
        <div class="content__inner">
            <div class="flat__options" data-aos="fade-right" data-aos-delay="800">
                <div class="flat__tabs">
                    <div data-type="flat" class="flat__tabs-item js-flat__tabs-item flat__tabs-item--active">
                        С мебелью
                    </div>
                    <div data-type="size" class="flat__tabs-item js-flat__tabs-item">С размерами</div>
                    <div data-type="stage" class="flat__tabs-item js-flat__tabs-item">На этаже</div>
                </div>
                <div class="flat__current">
                    <div class="flat__current-item">
                        <p class="flat__current-name">Корпус</p>
                        <p class="flat__current-value">4</p>
                    </div>
                    <div class="flat__current-item">
                        <p class="flat__current-name">Квартира номер</p>
                        <p class="flat__current-value">${flat.number}</p>
                    </div>
                </div>
                <ul class="flat__elements">`
                    + rooms +
                `</ul>
                <p class="flat__height">Высота потолков 3.4 м</p>
                <div class="flat__tagline">
                    <img src="./img/flat-single/flat-single-tagline.png" alt="" />
                </div>
            </div>
            <div
                class="flat__plan"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
            >
                <div class="housing__location housing__location--up">
                    <svg>
                        <use xlink:href="./img/flats/sprite.svg#arrow-gold"></use>
                    </svg>
                    <span>Горы</span>
                </div>
                <div class="housing__location housing__location--right">
                    <svg>
                        <use xlink:href="./img/flats/sprite.svg#arrow-gold"></use>
                    </svg>
                    <span>Никитский Ботанический Сад</span>
                </div>
                <div class="housing__location housing__location--down">
                    <svg>
                        <use xlink:href="./img/flats/sprite.svg#arrow-gold"></use>
                    </svg>
                    <span>Море</span>
                </div>
                <div class="housing__location housing__location--left">
                    <svg>
                        <use xlink:href="./img/flats/sprite.svg#arrow-gold"></use>
                    </svg>
                    <span>Ялта</span>
                </div>
                <img
                    data-type-img="flat"
                    class="js-plan-flat__img"
                    src="https://kolik29.github.io/castle.net/img/flat-single/floors/${floor}/plan-flat-${flat_id}_1.svg"
                />
                <img
                    data-type-img="size"
                    class="js-plan-flat__img"
                    src="https://kolik29.github.io/castle.net/img/flat-single/floors/${floor}/plan-flat-${flat_id}_2.svg"
                />
                <div class="sidebar-right__loupe">
                    <div class="sidebar-right__loupe-circle">
                        <div class="sidebar-right__loupe-line1"></div>
                        <div class="sidebar-right__loupe-line2"></div>
                    </div>
                    <div class="sidebar-right__loupe-line3"></div>
                </div>
            </div>
            <div class="flat__info" data-aos="fade-left" data-aos-delay="800">
                <div class="flat__area">
                    <p class="flat__area-item">
                        <span>${flat.rooms}</span>
                        Количество комнат
                    </p>
                    <div class="flat__area-wrapper">
                        <p class="flat__area-item">
                            <span>${flat.square} м²</span>
                            Общая площадь
                        </p>
                        <p class="flat__area-item">
                            <span>${flat.square_living} м²</span>
                            Жилая площадь
                        </p>
                    </div>
                </div>
                <div class="flat__price">
                    <span>15 046 140 * ₽</span>
                    * При единовременной оплате
                </div>
                <div class="flat__area-price">
                    <span>138 000 ₽</span>
                    Стоимость за м²
                </div>
                <button class="flat__btn tobook">Забронировать</button>
                <a class="flat__btn btn flat__btn--light btn--gold" href="#">Подобрать похожие</a>
                <a class="flat__link" href="https://kolik29.github.io/castle.net/documents/flat-single/floors/4/4К для продажи-1.pdf">
                    <span class="flat__link-icon"><img src="./img/common/pdf.svg" alt="" /></span>
                    <span class="flat__link-text">Скачать план квартиры</span>
                </a>
                <a class="flat__link" href="#">
                    <span class="flat__link-icon flat__link-icon--share"><img src="./img/common/share.svg" alt="" /></span>
                    <span class="flat__link-text">Поделиться</span>
                </a>
            </div>
        </div>
    </section>`
}