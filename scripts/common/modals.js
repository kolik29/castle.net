$(".callback").on("click", function(l) {
    l.preventDefault()
    $("#modal_callback").css("display", "flex").hide().fadeIn()
    $("#callback").fadeIn()
})
$(".tobook").on("click", function(l) {
    l.preventDefault()
    $("#modal__tobook").css("display", "flex").hide().fadeIn()
    $("#tobook").fadeIn()
})
$('area[alt="free"]').on("click", function(l) {
    document.querySelector(".parking-table__value--park").innerHTML = l.target.attributes.value.value, l.preventDefault()
    $("#modal__parking").css("display", "flex").hide().fadeIn()
    $("#parking").css("display", "flex").fadeIn()
})
$(".plan--fav").on("click", function(l) {
    l.preventDefault()
    $("#modal__plan").css("display", "flex").hide().fadeIn()
    $("#plan").fadeIn()
})
$(document).on("click", ".loupe-stage", function(l) {
    l.preventDefault()
    $("#modal__stage").css("display", "flex").hide().fadeIn()
})
$(document).on("click", ".loupe-sizes", function(l) {
    l.preventDefault()
    $("#modal__flat-2").css("display", "flex").hide().fadeIn()
});
var url = window.location.href;
let flag = !1;
"http://localhost:3000/" != url && "http://cb99445.tmweb.ru/" != url && "http://localhost:3000/index.html" != url && "http://cb99445.tmweb.ru/index.html" != url || setTimeout(() => {
    $("#modal__counter").css("display", "flex").hide().fadeIn()
    $("#counter").fadeIn(), flag = !0
}, 3e3), "http://localhost:3000/shares.html" != (url = window.location.href) && "http://cb99445.tmweb.ru/shares.html" != url || setTimeout(() => {
    $("#modal__subscribe").css("display", "flex").hide().fadeIn()
    $("#subscribe").fadeIn()
}, 3e3)
$(".modal__close").on("click", function() {
    $(this).closest(".modal").find("#online", "#callback", "#tobook", "#plan", "#parking", "#counter", "#subscribe").hide()
    $(this).closest("#modal_callback").fadeOut()
    $(this).closest("#modal__tobook").fadeOut()
    $(this).closest("#modal__plan").fadeOut()
    $(this).closest("#modal__parking").fadeOut()
    $(this).closest("#modal_online").fadeOut()
    $(this).closest("#modal__stage").fadeOut()
    $(this).closest("#modal__flat-1").fadeOut()
    $(this).closest("#modal__flat-2").fadeOut()
    $(this).closest("#modal__counter").fadeOut()
    $(this).closest("#modal__subscribe").fadeOut(), ("http://localhost:3000/" == url && 1 == flag || "http://cb99445.tmweb.ru/" == url && 1 == flag || "http://localhost:3000/index.html" == url && 1 == flag || "http://cb99445.tmweb.ru/index.html" == url && 1 == flag) && setTimeout(() => {
        $("#modal_online").css("display", "flex").hide().fadeIn()
        $("#online").fadeIn(), flag = !1
    }, 3e3)
})
$("#modal_callback, #modal_online, #modal__tobook, #modal__plan, #modal, #modal__stage, #modal__flat-1, #modal__flat-2, #modal__parking, #modal__counter, #modal__subscribe").mouseup(function(l) {
    var e = $(this).children(".modal__block");
    e.is(l.target) || 0 !== e.has(l.target).length || ($(this).fadeOut(), ("http://localhost:3000/" == url && 1 == flag || "http://cb99445.tmweb.ru/" == url && 1 == flag || "http://localhost:3000/index.html" == url && 1 == flag || "http://cb99445.tmweb.ru/index.html" == url && 1 == flag) && setTimeout(() => {
        $("#modal_online").css("display", "flex").hide().fadeIn()
        $("#online").fadeIn(), flag = !1
    }, 3e3))
})
$(".date").mask("99.99.9999")
$(".time").mask("99:99")
$(".tel").mask("+7 (999) 999-99-99");