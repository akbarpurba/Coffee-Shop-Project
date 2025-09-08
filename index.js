
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("section nav");

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    nav.classList.add("closing");

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
 
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  const btn = document.querySelector(".btn button"); 
  const nav = document.querySelector("nav");
  const listItems = document.querySelectorAll("nav li"); 
  
  if (window.scrollY > 50) { 
    header.classList.add("scrolled");
    nav.classList.add("scrolled");
    btn.classList.add("scroll");
    listItems.forEach(li => li.classList.add("scrolled")); 
  } else {
    header.classList.remove("scrolled");
    nav.classList.remove("scrolled");
    btn.classList.remove("scroll");
    listItems.forEach(li => li.classList.remove("scrolled")); 
  }
});

new TypeIt("#typeIt", {
  speed: 50,
  waitUntilVisible: true,
  loop: true,
})
.type("Selamat datang di AkbarCoffee!")
.pause(1500)
.delete()
.type("Nikmati kopi terbaik setiap hari ☕")
.pause(1500)
.delete()
.type("Suasana hangat, tempat nyaman, kopi istimewa.")
.pause(2000)
.delete()
.go();
