window.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  $(".go-article").on("click", function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "body" : href);
    const position = target.offset().top + 1 + "px";
    $("html, body").animate({ scrollTop: position }, 200);
  });

  $(".go-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });

  if (screen.width < 360) {
    $("#viewport").attr(
      "content",
      "width=360, maximum-scale=1, user-scalable=no"
    );
  }

  if (screen.width < 1280) {
    const target = $(".introduce-li");

    target.on("click", function () {
      target.toggleClass("clicked");
      target.not($(this)).removeClass("clicked");
    });
  }
});

window.addEventListener("scroll", function () {
  const introWrapHeight = $(".intro-wrap").outerHeight();

  if ($(this).scrollTop() > introWrapHeight) {
    $(".go-top").fadeIn();
  } else {
    $(".go-top").fadeOut();
  }

  function pauseVideo() {
    const div = document.getElementById("ytplayer");
    const iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  }

  if (screen.width > 1280) {
    if (
      $(".img01").css("opacity") !== "1" ||
      $(".go-top").css("display") === "none"
    ) {
      pauseVideo();
    }
  }
});

window.addEventListener("resize", function () {
  if (screen.width < 360) {
    $("#viewport").attr(
      "content",
      "width=360, maximum-scale=1, user-scalable=no"
    );
  } else {
    $("#viewport").attr(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
    );
  }

  if (screen.width < 1280) {
    const target = $(".introduce-li");

    target.on("click", function () {
      target.toggleClass("clicked");
      target.not($(this)).removeClass("clicked");
    });
  }
});

const userAgent = navigator.userAgent.toLocaleLowerCase();

console.log("userAgent", userAgent);
