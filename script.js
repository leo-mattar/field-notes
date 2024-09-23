// --- GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

let mm = gsap.matchMedia();

// --- GLOBAL - RELOAD AT THE TOP
window.addEventListener("beforeunload", function () {
  history.scrollRestoration = "manual";
});

// --- LENIS
window.lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --- PAPER TIGET SIGNATURE
const pprtgr = [
  'color: #F2F3F3',
  'background: #080808',
  'font-size: 12px',
  'padding-left: 10px',
  'line-height: 2',
  'border-left: 5px solid #ff3c31',
].join(';');
console.info(`

%cWebsite by Paper Tiger${' '}
www.papertiger.com${'     '}

`, pprtgr);

// --- SPLASH PAGE LOAD
function splashPageLoad() {
  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1, delay: 0.3 } });

  tl.to(".o-wrapper, .c-header", { autoAlpha: 1 });
  tl.fromTo(
    ".c-splash-card, .c-splash-line", { clipPath: "inset(0% 100% 0% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.2
    }, 0.3);
}

// --- SPLASH CARD FLIP
function splashCardFlip() {
  const openBtn = document.querySelector(".c-splash-more");
  const card = document.querySelector(".c-splash_lt");
  const introTxt = document.querySelector(".c-splash-intro-txt");
  const fullTxt = document.querySelector(".c-splash-full-txt");
  const icon = document.querySelector(".c-icon.splash-more");
  const overlay = document.querySelector(".c-overlay");
  const openBtnTxt = document.querySelector(".c-splash-more .t-body-3");
  const initialLocation = document.querySelector(".c-splash_lt");

  let isFlipped = false;

  const duration = 0.8;
  const ease = "power3.inOut";

  const tl = gsap.timeline({ paused: true, defaults: { duration, ease } });

  tl.to(introTxt, { height: 0, opacity: 0 });
  tl.to(fullTxt, { height: "auto", opacity: 1 }, 0);
  tl.to(icon, { rotation: 45 }, 0);
  tl.to(overlay, { opacity: 1 }, 0);
  tl.to(card, { xPercent: -50, left: "50%" }, 0);

  openBtn.addEventListener("click", function () {
    if (isFlipped === false) {
      openBtnTxt.textContent = "Less";
      overlay.classList.add("is-active");
      isFlipped = true;
      tl.restart();
    } else {
      openBtnTxt.textContent = "More";
      overlay.classList.remove("is-active");
      isFlipped = false;
      tl.reverse();
    }
  });
}

// --- HEADER BG
function headerBg() {
  const header = document.querySelector(".c-header");

  ScrollTrigger.create({
    trigger: "body",
    start: "100 top",
    onToggle: (self) => {
      if (self.isActive) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

// --- INIT
function init() {
  splashPageLoad();
  splashCardFlip();
  headerBg();
}

init();

// --- MATCHMEDIA - DESKTOP
mm.add("(min-width: 992px)", () => {
  //
  return () => {
    //
  };
});

// --- MATCHMEDIA - TABLET AND MOBILE
mm.add("(max-width: 991px)", () => {
  //
  return () => {
    //
  };
});
