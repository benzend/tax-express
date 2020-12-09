const nav = document.querySelector("nav");

function scrollHandler() {
  const navOffset = nav.offsetTop;
  if (navOffset > 50) {
    $("nav").addClass("nav--scrolled");
  }
  if (navOffset < 20) {
    $("nav").removeClass("nav--scrolled");
  }
}

let hamburgerActive = false;
$(".hamburger__container").on("click", () => {
  if (!hamburgerActive) {
    $(".hamburger").addClass("hamburger--active");
    $("nav").css({ height: "1000px" });
    hamburgerActive = true;
  } else {
    $(".hamburger").removeClass("hamburger--active");
    $("nav").css({ height: "80px" });
    hamburgerActive = false;
  }
});
