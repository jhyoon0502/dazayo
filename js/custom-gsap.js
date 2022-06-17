window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //intro
  gsap.to(".intro-wrap", {
    scrollTrigger: {
      trigger: ".intro-wrap",
      start: "top top",
      pin: true,
      scrub: 1,
      pinSpacing: false,
    },
  });

  gsap.to(".intro-cover", {
    scrollTrigger: {
      trigger: ".intro-wrap",
      start: "top top",
      pin: true,
      scrub: 1,
      pinSpacing: false,
    },
    opacity: 1,
  });

  gsap.to(".project-wrap-mobile", {
    scrollTrigger: {
      trigger: ".project-wrap-mobile",
      scrub: 1,
    },
  });

  ScrollTrigger.matchMedia({
    "(min-width: 1280px)": function () {
      //project-img
      gsap.set(".panel", {
        zIndex: (i, target, targets) => targets.length - i,
      });

      var images = gsap.utils.toArray(".panel");

      images.forEach((image, i) => {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".project-wrap",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight * 1.5,
            scrub: 1,
          },
        });

        tl.to(image, { duration: 0.33, opacity: 1 }).to(
          image,
          { duration: 0.33, opacity: 0 },
          0.66
        );
      });

      gsap.set(".panel-txt", {
        zIndex: (i, target, targets) => targets.length - i,
      });

      var texts = gsap.utils.toArray(".panel-txt");

      texts.forEach((text, i) => {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".project-wrap",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight * 1.5,
            scrub: true,
          },
        });

        tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
          text,
          { duration: 0.33, opacity: 0, y: "0%" },
          0.66
        );
      });

      //project-all
      gsap.to(".project-wrap", {
        scrollTrigger: {
          trigger: ".project-wrap",
          scrub: 1,
          pin: true,
          start: () => "top top",
          end: () => "+=" + images.length * window.innerHeight,
        },
      });
    },
  });

  //header
  const articles = gsap.utils.toArray("main");

  articles.forEach((article) => {
    const introHeight = document.querySelector(".intro-wrap").offsetHeight;

    ScrollTrigger.create({
      trigger: article,
      start: `${introHeight}`,
      toggleClass: {
        targets: "#header",
        className: "header-change",
      },
    });
  });
});
