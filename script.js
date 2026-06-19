const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* INTERACTIVE CARD FEEDBACK */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "#8f7f66";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});

/* CTA MICRO INTERACTION */
const cta = document.querySelector(".cta");

cta.addEventListener("mouseenter", () => {
  cta.style.letterSpacing = "2px";
});

cta.addEventListener("mouseleave", () => {
  cta.style.letterSpacing = "normal";
});
