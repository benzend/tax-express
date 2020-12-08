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
