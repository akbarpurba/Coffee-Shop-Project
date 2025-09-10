
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
  const desk = document.querySelectorAll(".nav-list li");
  if (window.scrollY > 50) { 
    header.classList.add("scrolled");
    nav.classList.add("scrolled");
    btn.classList.add("scroll");
    listItems.forEach(li => li.classList.add("scrolled")); 
    desk.forEach(list => list.classList.add("scrolled"));
  } else {
    header.classList.remove("scrolled");
    nav.classList.remove("scrolled");
    btn.classList.remove("scroll");
    listItems.forEach(li => li.classList.remove("scrolled")); 
    desk.forEach(list => list.classList.remove("scrolled"));
  }
 });


new TypeIt("#typeIt", {
  speed: 50,
  waitUntilVisible: true,
  loop: true,
})
.type("The Antidote to the Ordinary")
.pause(1500)
.delete()
.type("Fuel for Dreamers")
.pause(1500)
.delete()
.type("Defy the Grind. Savor the Cup")
.pause(1500)
.delete()
.type("Where Time Melts Away")
.pause(1500)
.delete()
.type("The Alchemy of Aroma")
.pause(1500)
.delete()
.type("Solace in Every Sip")
.pause(1500)
.delete()
.go();
