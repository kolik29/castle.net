const counters = document.querySelectorAll(".corps__counter"),
  mainOutlines = document.querySelectorAll(".corps--main .map__outline"),
  corpseInfo = document.querySelector(".info-corps");
let currentCorps, housing;
function corpsInfoShow(o, e, t) {
  const s = o.getAttribute("floorsCount"),
    n = o.getAttribute("flatsCount"),
    r = document.querySelector("#corps"),
    c = document.querySelector("#floor"),
    i = document.querySelector("#flat");
  (r.innerHTML = `${t} корпус`), (c.innerHTML = `${s}`), (i.innerHTML = `${n}`);
  let a = e.getBoundingClientRect();
  3 == t || 7 == t
    ? ((corpseInfo.style.left = "auto"),
      (corpseInfo.style.zIndex = 2),
      (corpseInfo.style.top = `${a.top + a.height / 2 + 8}px`),
      (corpseInfo.style.right = `${
        document.documentElement.clientWidth - a.right + a.width / 2 + 8
      }px`))
    : ((corpseInfo.style.right = "auto"),
      (corpseInfo.style.zIndex = 2),
      (corpseInfo.style.top = `${a.top + a.height / 2 + 8}px`),
      (corpseInfo.style.left = `${a.left + a.width / 2 + 8}px`));
}
function centering() {
  let o = -1;
  mainOutlines.forEach(e => {
    let t = e.getBoundingClientRect();
    (counters[(o += 1)].style.top = `${t.top + t.height / 2 - 17}px`),
      (counters[o].style.left = `${t.left + t.width / 2 - 17}px`);
  });
}
function showCorps(o) {
  $(".corps--main .map__outline").hide(),
    $(".corps__counter").hide(),
    (currentCorps = o),
    $(`.corps--${o}`)
      .css({
        opacity: 0,
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        "z-index": 1,
      })
      .animate({ opacity: 1 }, 1e3);
}
counters.forEach(o => {
  let e = o.innerHTML,
    t = document.querySelector(`.map__outline--${e.replace(/1./, '1-')}`);
  o.addEventListener("mouseover", () => {
    t.classList.add("map__outline--hover"),
      (counters[e[0]].style.zIndex = 3),
      corpsInfoShow(o, t, e),
      corpseInfo.classList.add("info-corps--active");
  }),
    o.addEventListener("mouseout", () => {
      t.classList.remove("map__outline--hover"),
        (counters[e[0]].style.zIndex = 1),
        corpseInfo.classList.remove("info-corps--active");
    });
}),
  centering(),
  window.addEventListener("resize", () => {
    centering();
  });
const compass = document.querySelector(".compass"),
  compassArrow = document.querySelector(".compass svg"),
  compassNorth = document.querySelector(".compass span");
function compassAnimation(o, e) {
  let t = "r" == o ? "rotateRight" : "l" == o ? "rotateLeft" : "none";
  compass.classList.remove("compass--rotateRight"),
    compass.classList.remove("compass--rotateLeft"),
    (compass.style.transform = `rotate(-${e}deg)`),
    (compassNorth.style.transform = `rotate(${e}deg)`),
    setTimeout(() => {
      compass.classList.add(`compass--${t}`);
    }, 0);
}
function compassAnimationRestart() {
  (compassArrow.style.animation = "none"),
    setTimeout(() => {
      compassArrow.style.animation = "";
    }, 50);
}
function floorActive() {
  const o = document.querySelectorAll(`.corps--${currentCorps} .map__outline`),
    e = document.querySelector(`.corps--${currentCorps} .floor`);
  o.forEach(o => {
    o.addEventListener("mouseover", () => {
      !(function (o) {
        const t = document.querySelector(
            `.corps--${currentCorps} .floor__corps`
          ),
          s = document.querySelector(`.corps--${currentCorps} .floor__count`),
          n = document.querySelector(
            `.corps--${currentCorps} .floor__flats-sold--val`
          ),
          r = o.getAttribute("floor"),
          c = o.getAttribute("sell");
        (t.innerHTML = `${currentCorps} корпус`),
          (s.innerHTML = `${r} этаж`),
          (n.innerHTML = `${c}`);
        let i = o.getBoundingClientRect();
        (e.style.top = `${i.top + i.height / 2 - 65}px`),
          (e.style.right = `${
            document.documentElement.clientWidth - i.left + 30
          }px`);
      })(o),
        e.classList.add("floor--active");
    }),
      o.addEventListener("mouseout", () => {
        e.classList.remove("floor--active");
      });
  });
}
$(".map__outline--1-1").on("click", o => {
  o.preventDefault(), (housing = 1), compassAnimation("l", 53), showCorps(1);
}),
$(".map__outline--1-2").on("click", o => {
  o.preventDefault(), (housing = 1), compassAnimation("l", 53), showCorps(1);
}),
  $(".map__outline--2").on("click", o => {
    o.preventDefault(), (housing = 2), compassAnimationRestart(), showCorps(1);
  }),
  $(".map__outline--3").on("click", o => {
    o.preventDefault(), (housing = 3), compassAnimationRestart(), showCorps(1);
  }),
  $(".map__outline--4").on("click", o => {
    o.preventDefault(),
      (housing = 4),
      compassAnimation("l", 106),
      showCorps(4),
      floorActive();
  }),
  $(".map__outline--5").on("click", o => {
    o.preventDefault(), (housing = 5), compassAnimation("l", 106), showCorps(5);
  }),
  $(".map__outline--6").on("click", o => {
    o.preventDefault(), (housing = 6), compassAnimation("l", 53), showCorps(5);
  }),
  $(".map__outline--7").on("click", o => {
    o.preventDefault(), (housing = 7), compassAnimationRestart(), showCorps(5);
  }),
  $(".corps__back").on("click", o => {
    $(".corps--main").animate({ opacity: 1 }, 1e3),
      $(`.corps--${currentCorps}`).animate({ opacity: 0 }, 1e3),
      2 == housing || 3 == housing || 7 == housing
        ? compassAnimationRestart()
        : compassAnimation("r", 0),
      setTimeout(() => {
        $(`.corps--${currentCorps}`).css({ "z-index": "unset" }),
          $(".corps--main .map__outline").show(),
          $(".corps__counter").show();
      }, 1e3);
  });
