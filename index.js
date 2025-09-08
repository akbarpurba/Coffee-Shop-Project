const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("section nav");

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    nav.classList.add("closing");

    // hapus class closing setelah animasi selesai
    nav.addEventListener("animationend", function onEnd() {
      nav.classList.remove("closing");
      nav.removeEventListener("animationend", onEnd);
    });
  } else {
    nav.classList.add("active");
  }
   const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

document.getElementById('year').innerHTML = new Date().getFullYear();
 