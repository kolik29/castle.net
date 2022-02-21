function interierSlider() {
	// Interier
  let e = new Swiper("#interier.swiper-container", {
    direction: "horizontal",
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: !0,
    pagination: { el: ".slider__slides--interier", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next.slider__button--interier",
      prevEl: ".swiper-button-prev.slider__button--interier",
    },
  });

  const t = document.querySelector("#interier"),
    i = document.querySelector(".carousel__close"),
    r = document.querySelector("body"),
    n = document.querySelector(".slider__controls"),
    o = document.querySelector(".carousel__title"),
    s = document.querySelector(".fixed-buttons");
  t.addEventListener("click", () => {
    t.classList.add("carousel"),
      (i.style.display = "flex"),
      (s.style.display = "none"),
      (o.style.display = "block"),
      (r.style.overflow = "hidden"),
      n.classList.add("slider__controls--fixed"),
      e.destroy(),
      (e = new Swiper("#interier.swiper-container", {
        direction: "horizontal",
        speed: 400,
        loop: !0,
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: !0,
        pagination: { el: ".slider__slides--interier", type: "fraction" },
        navigation: {
          nextEl: ".swiper-button-next.slider__button--interier",
          prevEl: ".swiper-button-prev.slider__button--interier",
        },
      }));
  }),
    i.addEventListener("click", () => {
      t.classList.remove("carousel"),
        (i.style.display = "none"),
        (s.style.display = "flex"),
        (o.style.display = "none"),
        (r.style.overflow = "auto"),
        n.classList.remove("slider__controls--fixed"),
        e.destroy(),
        (e = new Swiper("#interier.swiper-container", {
          direction: "horizontal",
          speed: 400,
          slidesPerView: "auto",
          spaceBetween: 15,
          loop: !0,
          pagination: { el: ".slider__slides--interier", type: "fraction" },
          navigation: {
            nextEl: ".swiper-button-next.slider__button--interier",
            prevEl: ".swiper-button-prev.slider__button--interier",
          },
        }));
    });

	// Prestige
  let eee = new Swiper("#prestige.swiper-container", {
    direction: "horizontal",
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: !0,
    pagination: { el: ".slider__slides--prestige", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next.slider__button--prestige",
      prevEl: ".swiper-button-prev.slider__button--prestige",
    },
  });
  const ttt = document.querySelector("#prestige"),
  rrr = document.querySelector("body"),
    iii = ttt.parentNode.querySelector(".carousel__close"),
    nnn = ttt.parentNode.querySelector(".slider__controls"),
    ooo = ttt.parentNode.querySelector(".carousel__title"),
    sss = document.querySelector(".fixed-buttons");
  ttt.addEventListener("click", () => {
    ttt.classList.add("carousel"),
      (iii.style.display = "flex"),
      (sss.style.display = "none"),
      (ooo.style.display = "block"),
      (rrr.style.overflow = "hidden"),
      nnn.classList.add("slider__controls--fixed"),
      eee.destroy(),
      (eee = new Swiper("#prestige.swiper-container", {
        direction: "horizontal",
        speed: 400,
        loop: !0,
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: !0,
        pagination: { el: ".slider__slides--prestige", type: "fraction" },
        navigation: {
          nextEl: ".swiper-button-next.slider__button--prestige",
          prevEl: ".swiper-button-prev.slider__button--prestige",
        },
      }));
  }),
    iii.addEventListener("click", () => {
      ttt.classList.remove("carousel"),
        (iii.style.display = "none"),
        (sss.style.display = "flex"),
        (ooo.style.display = "none"),
        (rrr.style.overflow = "auto"),
        nnn.classList.remove("slider__controls--fixed"),
        eee.destroy(),
        (eee = new Swiper("#prestige.swiper-container", {
          direction: "horizontal",
          speed: 400,
          slidesPerView: "auto",
          spaceBetween: 15,
          loop: !0,
          pagination: { el: ".slider__slides--prestige", type: "fraction" },
          navigation: {
            nextEl: ".swiper-button-next.slider__button--prestige",
            prevEl: ".swiper-button-prev.slider__button--prestige",
          },
        }));
    });

	// Comfort
  let eeee = new Swiper("#comfort.swiper-container", {
    direction: "horizontal",
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: !0,
    pagination: { el: ".slider__slides--comfort", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next.slider__button--comfort",
      prevEl: ".swiper-button-prev.slider__button--comfort",
    },
  });
  const tttt = document.querySelector("#comfort"),
    rrrr = document.querySelector("body"),
    iiii = tttt.parentNode.querySelector(".carousel__close"),
    nnnn = tttt.parentNode.querySelector(".slider__controls"),
    oooo = tttt.parentNode.querySelector(".carousel__title"),
    ssss = document.querySelector(".fixed-buttons");
  tttt.addEventListener("click", () => {
    tttt.classList.add("carousel"),
      (iiii.style.display = "flex"),
      (ssss.style.display = "none"),
      (oooo.style.display = "block"),
      (rrrr.style.overflow = "hidden"),
      nnnn.classList.add("slider__controls--fixed"),
      eeee.destroy(),
      (eeee = new Swiper("#comfort.swiper-container", {
        direction: "horizontal",
        speed: 400,
        loop: !0,
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: !0,
        pagination: { el: ".slider__slides--comfort", type: "fraction" },
        navigation: {
          nextEl: ".swiper-button-next.slider__button--comfort",
          prevEl: ".swiper-button-prev.slider__button--comfort",
        },
      }));
  }),
    iiii.addEventListener("click", () => {
      tttt.classList.remove("carousel"),
        (iiii.style.display = "none"),
        (ssss.style.display = "flex"),
        (oooo.style.display = "none"),
        (rrrr.style.overflow = "auto"),
        nnnn.classList.remove("slider__controls--fixed"),
        eeee.destroy(),
        (eeee = new Swiper("#comfort.swiper-container", {
          direction: "horizontal",
          speed: 400,
          slidesPerView: "auto",
          spaceBetween: 15,
          loop: !0,
          pagination: { el: ".slider__slides--comfort", type: "fraction" },
          navigation: {
            nextEl: ".swiper-button-next.slider__button--comfort",
            prevEl: ".swiper-button-prev.slider__button--comfort",
          },
        }));
    });
}
document.addEventListener("onload", interierSlider());
