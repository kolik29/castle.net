function switchCheckbox() {
  var e = document.querySelector("#switcher"),
    t = document.querySelectorAll("#table-checkbox"),
    n = !1;
  e.addEventListener("click", function (e) {
    n
      ? (t.forEach(function (e) {
          e.checked = !1;
        }),
        (n = !1))
      : (t.forEach(function (e) {
          e.checked = !0;
        }),
        (n = !0));
  }),
    t.forEach(function (o) {
      o.addEventListener("click", function () {
        (n = !0),
          (e.checked = !0),
          Array.from(t).every(function (e) {
            return 0 == e.checked;
          }) && ((n = !1), (e.checked = !1));
      });
    });
}
function classToggle() {
  var e = document.querySelectorAll(".tabs-switcher .tabs-switcher__title");
  e.forEach(function (t) {
    t.addEventListener("click", function () {
      e.forEach(function (e) {
        e.classList.remove("tabs-switcher__title--active");
      }),
        t.classList.toggle("tabs-switcher__title--active");
    });
  });
}
$(document).ready(function () {
  AOS.init(), $(".index__btn").addClass("aos-animate");
  const e = $("#cookie");
  sessionStorage.getItem("cookie") ||
    setTimeout(function () {
      e.css("display", "flex").hide().fadeIn();
    }, 2e3),
    $(".cookie__btn").on("click", function (t) {
      t.preventDefault(),
        sessionStorage.setItem("cookie", "agree"),
        e.fadeOut();
    }),
    document.querySelectorAll(".menu__sub").forEach(e => {
      const t = e.querySelector(".menu__submenu");
      e.addEventListener("mouseover", () => {
        t.classList.add("menu__submenu--active");
      }),
        e.addEventListener("mouseout", () => {
          t.classList.remove("menu__submenu--active");
        });
    }),
    $(".callback").on("click", function (e) {
      e.preventDefault(),
        $("#modal_callback").css("display", "flex").hide().fadeIn(),
        $("#callback").fadeIn();
    }),
    $(".tobook").on("click", function (e) {
      e.preventDefault(),
        $("#modal__tobook").css("display", "flex").hide().fadeIn(),
        $("#tobook").fadeIn();
    }),
    $('area[alt="free"]').on("click", function (e) {
      (document.querySelector(".parking-table__value--park").innerHTML =
        e.target.attributes.value.value),
        e.preventDefault(),
        $("#modal__parking").css("display", "flex").hide().fadeIn(),
        $("#parking").css("display", "flex").fadeIn();
    }),
    $(".plan--fav").on("click", function (e) {
      e.preventDefault(),
        $("#modal__plan").css("display", "flex").hide().fadeIn(),
        $("#plan").fadeIn();
    }),
    $(document).on("click", ".loupe-stage", function (e) {
      e.preventDefault(),
        $("#modal__stage").css("display", "flex").hide().fadeIn();
    }),
    $(document).on("click", ".loupe-furniture", function (e) {
      e.preventDefault(),
        $("#modal__flat-1").css("display", "flex").hide().fadeIn();
    }),
    $(document).on("click", ".loupe-sizes", function (e) {
      e.preventDefault(),
        $("#modal__flat-2").css("display", "flex").hide().fadeIn();
    });
  var t = window.location.href;
  let n = !1;
  ("http://localhost:3000/" != t &&
    "http://cb99445.tmweb.ru/" != t &&
    "http://localhost:3000/index.html" != t &&
    "http://cb99445.tmweb.ru/index.html" != t) ||
    setTimeout(() => {
      $("#modal__counter").css("display", "flex").hide().fadeIn(),
        $("#counter").fadeIn(),
        (n = !0);
    }, 3e3),
    ("http://localhost:3000/shares.html" != (t = window.location.href) &&
      "http://cb99445.tmweb.ru/shares.html" != t) ||
      setTimeout(() => {
        $("#modal__subscribe").css("display", "flex").hide().fadeIn(),
          $("#subscribe").fadeIn();
      }, 3e3),
    $(".modal__close").on("click", function () {
      $(this)
        .closest(".modal")
        .find(
          "#online",
          "#callback",
          "#tobook",
          "#plan",
          "#parking",
          "#counter",
          "#subscribe"
        )
        .hide(),
        $(this).closest("#modal_callback").fadeOut(),
        $(this).closest("#modal__tobook").fadeOut(),
        $(this).closest("#modal__plan").fadeOut(),
        $(this).closest("#modal__parking").fadeOut(),
        $(this).closest("#modal_online").fadeOut(),
        $(this).closest("#modal__stage").fadeOut(),
        $(this).closest("#modal__flat-1").fadeOut(),
        $(this).closest("#modal__flat-2").fadeOut(),
        $(this).closest("#modal__counter").fadeOut(),
        $(this).closest("#modal__subscribe").fadeOut(),
        (("http://localhost:3000/" == t && 1 == n) ||
          ("http://cb99445.tmweb.ru/" == t && 1 == n) ||
          ("http://localhost:3000/index.html" == t && 1 == n) ||
          ("http://cb99445.tmweb.ru/index.html" == t && 1 == n)) &&
          setTimeout(() => {
            $("#modal_online").css("display", "flex").hide().fadeIn(),
              $("#online").fadeIn(),
              (n = !1);
          }, 3e3);
    }),
    $(
      "#modal_callback, #modal_online, #modal__tobook, #modal__plan, #modal, #modal__stage, #modal__flat-1, #modal__flat-2, #modal__parking, #modal__counter, #modal__subscribe"
    ).mouseup(function (e) {
      var o = $(this).children(".modal__block");
      o.is(e.target) ||
        0 !== o.has(e.target).length ||
        ($(this).fadeOut(),
        (("http://localhost:3000/" == t && 1 == n) ||
          ("http://cb99445.tmweb.ru/" == t && 1 == n) ||
          ("http://localhost:3000/index.html" == t && 1 == n) ||
          ("http://cb99445.tmweb.ru/index.html" == t && 1 == n)) &&
          setTimeout(() => {
            $("#modal_online").css("display", "flex").hide().fadeIn(),
              $("#online").fadeIn(),
              (n = !1);
          }, 3e3));
    }),
    $(".date").mask("99.99.9999"),
    $(".time").mask("99:99"),
    $(".tel").mask("+7 (999) 999-99-99");
  class o {
    constructor(e) {
      (this.el = document.querySelector(e)),
        (this.parentNode = this.el.parentNode),
        (this.parentChildrens = [...this.parentNode.children]),
        (this.nodeIndex = [...this.parentNode.children].indexOf(this.el)),
        (this.sizeCheck = (e, t, n, o = "default") => {
          "default" === o &&
            (document.documentElement.clientWidth <= e &&
              (this.el.remove(), t()),
            window.addEventListener("resize", () => {
              document.documentElement.clientWidth <= e
                ? (this.el.remove(), t())
                : n();
            })),
            "reverse" === o &&
              (document.documentElement.clientWidth >= e &&
                (this.el.remove(), t()),
              window.addEventListener("resize", () => {
                document.documentElement.clientWidth >= e
                  ? (this.el.remove(), t())
                  : n();
              }));
        });
    }
    move(e, t, n = "end") {
      const o = document.querySelector(e),
        s = this.el.cloneNode(!0);
      this.sizeCheck(
        t,
        () => {
          "start" === n && o.prepend(s), "end" === n && o.append(s);
        },
        () => {
          (this.parentChildrens = [...this.parentNode.children]),
            o.lastElementChild === s && o.lastElementChild.remove(),
            this.parentChildrens.includes(this.el) ||
              (void 0 !== this.parentChildrens[this.nodeIndex]
                ? this.parentChildrens[this.nodeIndex].before(s)
                : this.parentNode.append(s));
        }
      );
    }
    delete(e, t = "default") {
      this.sizeCheck(
        e,
        () => {
          this.el.remove();
        },
        () => {
          this.parentChildrens.includes(this.el)
            ? this.parentNode.append(this.el)
            : this.parentChildrens[this.nodeIndex].before(this.el);
        },
        t
      );
    }
  }
  const s = new o(".header__messanger"),
    l = new o(".header__menu--left"),
    i = new o(".header__menu--right");
  if (
    (s.move(".header__container", 1050),
    l.delete(1050),
    i.delete(1050),
    document.querySelector("main.online"))
  ) {
    new o(".header-online__btn").move(".online", 950);
  }
  !(function () {
    const e = document.querySelector(".header__burger-btn"),
      t = document.querySelector(".sideout-menu__close"),
      n = document.querySelector(".sideout-menu");
    e.addEventListener("click", () => {
      n.classList.toggle("sideout-menu--active");
    }),
      t.addEventListener("click", () => {
        n.classList.toggle("sideout-menu--active");
      }),
      document.addEventListener("click", t => {
        t.target !== n &&
          t.target !== e &&
          n.classList.contains("sideout-menu--active") &&
          !n.contains(t.target) &&
          n.classList.remove("sideout-menu--active");
      }),
      window.addEventListener("resize", () => {
        document.documentElement.clientWidth >= 1050 &&
          n.classList.contains("sideout-menu--active") &&
          n.classList.remove("sideout-menu--active");
      });
  })();

  $('body').on('click', '.js-select-floor', function() {
    $(this).addClass('sidebar-right__item--active').siblings().removeClass('sidebar-right__item--active');
    $('.js-sidebar-left[data-floor="' + $(this).data('floor-target') + '"]').removeClass('sidebar-left--hide').siblings().addClass('sidebar-left--hide');
    $('.js-plan[data-floor="' + $(this).data('floor-target') + '"]').removeClass('plan--hide').siblings().addClass('plan--hide');;
  })

  $('body').on('mouseover', '.js-plan-flat', function() {
    $('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').addClass('plan-flat-bg--show').siblings().removeClass('plan-flat-bg--show');

    console.log('enter')
  
    if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-free'))
      $('.sidebar-left__info').css({
        'opacity': '1'
      })
    else
      $('.sidebar-left__info').css({
        'opacity': ''
      })

    if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-sold'))
      $('.plan__msg.plan__sold').css({
        'opacity': '1'
      })
    else
      $('.plan__msg.plan__sold').css({
        'opacity': ''
      })

    if ($(this).parent().find('.js-plan-flat-bg[data-plan-flat="' + $(this).data('plan-flat-target') + '"]').hasClass('plan-flat-bg--is-booked'))
      $('.plan__msg.plan__booked').css({
        'opacity': '1'
      })
    else
      $('.plan__msg.plan__booked').css({
        'opacity': ''
      })
  })

  $('body').on('mouseout', '.js-plan-flat', function() {
    $('.js-plan-flat-bg').removeClass('plan-flat-bg--show');
    
    $('.sidebar-left__info').css({
      'opacity': ''
    });

    $('.plan__msg.plan__sold').css({
      'opacity': ''
    })

    $('.plan__msg.plan__booked').css({
      'opacity': ''
    })
  })
});
