function flatMap() {
    var a = $(window).outerWidth(),
        e = $(".map-desktop"),
        t = $(".map-1366");

    a < 1370 ? (e.removeAttr("name"), t.attr("name", "image-map")) : a > 1366 && (t.removeAttr("name"), e.attr("name", "image-map"))
}

$(".plan__flat-1").mouseenter(function() {
    $(".plan__map").css("opacity", 0), $(".plan__red").css("opacity", 1), $(".plan__flat-2").mouseenter(function() {
        $(".plan__map").css("opacity", 0), $(".plan__orange").css("opacity", 1), $(".plan__msg").css({
            opacity: 0,
            "z-index": -1
        })
        
        $(".plan__booked").css({
            opacity: 1,
            "z-index": 3
        })
    })
    
    $(".plan__red, .plan__orange").css("opacity", 0)
})

$(".plan__flat-3").mouseenter(function() {
    $(".plan__map").css("opacity", 0), $(".plan__msg").css({
        opacity: 0,
        "z-index": -1
    })
    
    $(".plan__free, .sidebar-left__info").css("opacity", 1)
}).mouseleave(function() {
    $(".plan__free, .sidebar-left__info").css("opacity", 0)
}).on("click", function(a) {
    a.preventDefault(), $(".content").hide(), $(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"), $("#flat").toggleClass("flat__tabs-item--active"), $("#flat-content").fadeIn(), $(".background__stage").hide(), $(".background__flat").fadeIn(1e3), $(".sidebar-right__loupe").removeClass("loupe-stage"), $(".sidebar-right__loupe").removeClass("loupe-sizes"), $(".sidebar-right__loupe").addClass("loupe-furniture"), $(".flat__tagline").addClass("flat__tagline--active")
})

$(".sidebar-left__cat-item").on("click", function() {
    $(".sidebar-left__cat-item").not(this).removeClass("sidebar-left__cat-item--active"), $(this).toggleClass("sidebar-left__cat-item--active"), $(this).hasClass("cat-flats-2") ? ($(".plan__map").css("opacity", 0), $(".plan__flats-2").css("opacity", 1)) : $(this).hasClass("cat-flats-3") ? ($(".plan__map").css("opacity", 0), $(".plan__free").css("opacity", 1)) : ($(".plan__map").css("opacity", 0), $(".plan__clean").css("opacity", 1))
})

$(".flat__tabs-item").on("click", function() {
    $(".flat__tabs-item").not(this).removeClass("flat__tabs-item--active"), $(this).toggleClass("flat__tabs-item--active")
})

$("#flat").on("click", function() {
    $("#size-img").hide(), $("#flat-img").show(), $(".background__stage").hide(), $(".background__flat").fadeIn(), $(".sidebar-right__loupe").removeClass("loupe-stage"), $(".sidebar-right__loupe").removeClass("loupe-sizes"), $(".sidebar-right__loupe").addClass("loupe-furniture")
})

$("#stage").on("click", function() {
    $(".content").hide(), $("#size-img").hide(), $("#flat-img").show(), $("#stage-content").fadeIn(), $(".background__flat").hide(), $(".background__stage").fadeIn(), $(".sidebar-right__loupe").removeClass("loupe-furniture"), $(".sidebar-right__loupe").removeClass("loupe-sizes"), $(".sidebar-right__loupe").addClass("loupe-stage")
})

$("#size").on("click", function() {
    $("#flat-img").hide(), $("#size-img").show(), $(".background__stage").hide(), $(".background__flat").fadeIn(), $(".sidebar-right__loupe").removeClass("loupe-stage"), $(".sidebar-right__loupe").removeClass("loupe-furniture"), $(".sidebar-right__loupe").addClass("loupe-sizes")
})

$(".flat-coords area").mouseenter(function() {
    $(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color", "hsla(31,36%,62%,.29)")
}).mouseleave(function() {
    $(".flat__elements-item").eq($(".flat-coords area").index(this)).css("background-color", "transparent")
})

flatMap()

$(window).resize(function() {
    flatMap()
});

$(() => {
    let floors = [
        {
            flat: [
                {
                    rooms: 2,
                    polygon: '0% 26.2%, 46.5% 26.2%, 46.5% 47%, 40.7% 47%, 40.7% 52.2%, 41.7% 52.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 83.99,
                    square_living: 42.55,
                    status: 'free',
                    number: 1,
                    square_info: [
                        [105, 'Коридор', '9.64'],
                        [106, 'Гостиная', '25.04'],
                        [107, 'Спальня', '17.51'],
                        [108, 'Кухня-столовая', '12.63'],
                        [109, 'Санузел', '3.39'],
                        [110, 'Санузел', '4.42'],
                        [111, 'Гардероб', '2.93'],
                        [112, 'Санузел', '2.95'],
                        [113, 'Лоджия (с пониж, козфф. 0,5)', '5.49'],
                    ]
                },
                {
                    rooms: 3,
                    polygon: '46.2% 26.2%, 100% 26.2%, 100% 81%, 95% 89.4%, 92% 85.4%, 87% 82.4%, 77% 82.4%, 77% 81.4%, 41% 81.4%, 41% 46.4%, 46.2% 46.4%',
                    square: 95.27,
                    square_living: 57.79,
                    status: 'free',
                    number: 2,
                    square_info: [
                        [114, 'Коридор', '5.87'],
                        [115, 'Гостиная', '23.34'],
                        [116, 'Спальня', '11.63'],
                        [117, 'Спальня', '16.62'],
                        [118, 'Кухня-столовая', '12.73'],
                        [119, 'Гардерод', '3.80'],
                        [129, 'Санузел', '4.00'],
                        [121, 'Санузел', '3.07'],
                        [122, 'Санузел', '2.10'],
                        [124, 'Лоджия', '2.49'],
                        [125, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 2,
                    polygon: '0% 28.2%, 19% 28.2%, 19% 3.2%, 40.5% 3.2%, 40.5% 20.2%, 45.5% 20.2%, 45.5% 28.2%, 46.5% 28.2%, 46.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
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
                        [220, 'Спальня', '11.83'],
                        [221, 'Гостиная', '23.34'],
                        [222, 'Спальня', '16.62'],
                        [223, 'Лоджия', '2.49'],
                        [224, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 3,
                    polygon: '46.2% 26.2%, 100% 26.2%, 100% 81%, 95% 89.4%, 92% 85.4%, 87% 82.4%, 77% 82.4%, 77% 81.4%, 41% 81.4%, 41% 46.4%, 46.2% 46.4%',
                    square: 95.55,
                    square_living: 57.79,
                    status: 'free',
                    number: 4,
                    square_info: [
                        [214, 'Коридор', '5.87'],
                        [215, 'Кухня-столовая', '12.73'],
                        [216, 'Санузел', '2.38'],
                        [217, 'Санузел', '3.07'],
                        [218, 'Гардерод', '3.80'],
                        [219, 'Санузел', '4.00'],
                        [220, 'Спальня', '17.83'],
                        [221, 'Гостиная', '23.34'],
                        [222, 'Спальня', '16.62'],
                        [223, 'Лоджия (с пониж, коэфф. 0.5)', '2.49'],
                        [224, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 2,
                    polygon: '0% 28.2%, 19% 28.2%, 19% 3.2%, 40.5% 3.2%, 40.5% 20.2%, 45.5% 20.2%, 45.5% 28.2%, 46.5% 28.2%, 46.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 96.68,
                    square_living: 58.57,
                    status: 'free',
                    number: 5,
                    square_info: [
                        [214, 'Коридор', '5.87'],
                        [215, 'Кухня-столовая', '12.73'],
                        [216, 'Санузел', '2.38'],
                        [217, 'Санузел', '3.07'],
                        [218, 'Гардероб', '3.80'],
                        [219, 'Санузел', '4.00'],
                        [220, 'Спальня', '11.83'],
                        [221, 'Гостиная', '23.34'],
                        [222, 'Спальня', '16.62'],
                        [223, 'Лоджия', '2.49'],
                        [224, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 3,
                    polygon: '46.2% 26.2%, 100% 26.2%, 100% 81%, 95% 89.4%, 92% 85.4%, 87% 82.4%, 77% 82.4%, 77% 81.4%, 41% 81.4%, 41% 46.4%, 46.2% 46.4%',
                    status: 'sold',
                    number: 6
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 7,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 8,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 9,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 10,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 11,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
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
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 13,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 14,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 15,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 16,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 17,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 18,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 19,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 20,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                }
            ]
        },
        {

            white_box: true,
            flat: [
                {
                    rooms: 3,
                    polygon: '0% 27.2%, 14% 27.2%, 14% 2.2%, 40.5% 2.2%, 40.5% 18.2%, 51.5% 18.2%, 51.5% 28.2%, 45.5% 28.2%, 45.5% 48%, 40.7% 48%, 40.7% 54.2%, 41.7% 54.2%, 41.7% 83.7%, 40.9% 89.7%, 38.4% 94.7%, 34.7% 98%, 30.5% 99%, 26.2% 97.8%, 22.4% 94.4%, 20.0% 89.4%, 19% 83.4%, 19% 80.4%, 0% 80.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 21,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [518, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '17.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
                    ]
                },
                {
                    rooms: 4,
                    polygon: '45.2% 27.2%, 78.2% 27.2%, 78.2% 1.2%, 98.2% 1.2%, 98.2% 21.2%, 100% 21.2%, 100% 27.2%, 100% 81%, 77% 82.4%, 77% 81.4%, 40% 81.4%, 40% 46.4%, 45.2% 46.4%',
                    square: 115.27,
                    square_living: 74.06,
                    status: 'free',
                    number: 22,
                    square_info: [
                        [614, 'Коридор', '5.67'],
                        [615, 'Кухня-столовая', '13.43'],
                        [616, 'Санузел', '5.40'],
                        [617, 'Санузел', '3.00'],
                        [618, 'Гардероб', '3.80'],
                        [619, 'Санузел', '4.00'],
                        [620, 'Спальня', '17.83'],
                        [621, 'Гостиная', '23.42'],
                        [622, 'Спальня', '15.47'],
                        [623, 'Спальня', '11.35'],
                        [624, 'Лоджия', '2.49'],
                        [625, 'Лоджия', '3.42'],
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
    $('body').on('click', '.loupe-furniture', function(e) {
        e.preventDefault();

        console.log($(this).closest('.content__inner').find('.flat__tabs-item.js-flat__tabs-item.flat__tabs-item--active').data('type'))

        if ($(this).closest('.content__inner').find('.flat__tabs-item.js-flat__tabs-item.flat__tabs-item--active').data('type') == 'flat')
            $('#modal__flat-1').css('display', 'flex').hide().fadeIn();
        
        if ($(this).closest('.content__inner').find('.flat__tabs-item.js-flat__tabs-item.flat__tabs-item--active').data('type') == 'size')
            $('#modal__flat-2').css('display', 'flex').hide().fadeIn();
    })

    $('#modal__stage .modal__inner img').attr('src', $('.js-plan[data-floor="1"] > img').attr('src'))

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

        $('#modal__stage .modal__inner img').attr('src', $('.js-plan[data-floor="' +  $(this).data('floor-target')+ '"] > img').attr('src'))
    })

    let in_appartment = false;
    
    $('body').on('mouseover', '.js-plan-flat', function() {
        $('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').addClass('plan-flat-bg--show').siblings().removeClass('plan-flat-bg--show');
        
        $('.js-plan__msg').css({
            'opacity': '',
            'top': '',
            'left': '',
            'z-index': ''
        });
        
        $('.sidebar-left__info').hide();

        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-free'))
            $('.sidebar-left__info[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').show();
        
        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-sold'))
            $('.plan__msg.plan__sold').css({
                'opacity': '1',
                'top': $(this).position().top + $(this).parent().position().top + ($(this).height() / 2),
                'left': $(this).position().left + $(this).parent().position().left + ($(this).width() / 2),
                'z-index': '1'
            })
        
        if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-booked'))
            $('.plan__msg.plan__booked').css({
                'opacity': '1',
                'top': $(this).position().top + $(this).parent().position().top + ($(this).height() / 2),
                'left': $(this).position().left + $(this).parent().position().left + ($(this).width() / 2)
            })

        in_appartment = true;
    })

    $('body').on('click', '.js-plan-flat', function() {
        $('#modal__flat-1 img').attr('src', `/img/flat-single/floors/${$(this).parent().data('floor')}/plan-flat-${$(this).data('plan-flat-target')}_1.svg`);
        $('#modal__flat-2 img').attr('src', `/img/flat-single/floors/${$(this).parent().data('floor')}/plan-flat-${$(this).data('plan-flat-target')}_2.svg`);
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

        $(this).addClass('flat__tabs-item--active').siblings().removeClass('flat__tabs-item--active');
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
        `<a class="sidebar-right__link" href="/documents/flat-single/floors/${floor}/4К для продажи.pdf" download>
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
    return `
    <div class="plan js-plan" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000" data-floor="${floor}" ` + (floor == 1 ? ' style="display: block;"' : '') + `>
        <div class="plan-flat-bg` + (flat[0].status == 'sold' ? ' plan-flat-bg--is-sold' : '') + (flat[0].status == 'free' ? ' plan-flat-bg--is-free' : '') + (flat[0].status == 'booked' ? ' plan-flat-bg--is-booked' : '') + ` js-plan-flat-bg" data-plan-flat="1" data-plan-rooms="${flat[0].rooms}" style="
            -webkit-mask-image: url(/img/flat-single/floors/${floor}/plan-floor-1_bg.svg);
        "></div>
        <div class="plan-flat-bg` + (flat[1].status == 'sold' ? ' plan-flat-bg--is-sold' : '') + (flat[1].status == 'free' ? ' plan-flat-bg--is-free' : '') + (flat[1].status == 'booked' ? ' plan-flat-bg--is-booked' : '') + ` js-plan-flat-bg" data-plan-flat="2" data-plan-rooms="${flat[1].rooms}" style="
            -webkit-mask-image: url(/img/flat-single/floors/${floor}/plan-floor-2_bg.svg);
        "></div>
        <img
            id="plan-img"
            src="/img/flat-single/floors/${floor}/plan-floor.svg"
        />`
        + `
        <div 
            class="plan-flat js-plan-flat` + (flat[0].status == 'free' ? ' js-plan-flat--free' : '') + `"
            data-plan-flat-target="1"
            style="clip-path: polygon(${flat[0].polygon})"
        ></div>`
        +
        `<div 
            class="plan-flat js-plan-flat` + (flat[1].status == 'free' ? ' js-plan-flat--free' : '') + `"
            data-plan-flat-target="2"
            style="clip-path: polygon(${flat[1].polygon})"
        ></div>`
        +
        `<div class="sidebar-right__loupe loupe-stage">
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
                    src="/img/flat-single/floors/${floor}/plan-flat-${flat_id}_1.svg"
                />
                <img
                    data-type-img="size"
                    class="js-plan-flat__img"
                    src="/img/flat-single/floors/${floor}/plan-flat-${flat_id}_2.svg"
                />
                <div class="sidebar-right__loupe loupe-furniture">
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
                <a class="flat__link" href="/documents/flat-single/floors/4/4К для продажи-1.pdf">
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