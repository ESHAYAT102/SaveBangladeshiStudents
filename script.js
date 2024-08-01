let nav = document.querySelector("nav");
let checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    nav.style.marginLeft = "0rem";
  } else {
    nav.style.marginLeft = "-5rem";
  }
});

let navA1 = document.getElementById("navA1");

navA1.addEventListener("click", () => {
  window.location.href = "#";
});

let navA2 = document.getElementById("navA2");

navA2.addEventListener("click", () => {
  window.location.href = "#16";
});

let navA3 = document.getElementById("navA3");

navA3.addEventListener("click", () => {
  window.location.href = "#17";
});

let navA4 = document.getElementById("navA4");

navA4.addEventListener("click", () => {
  window.location.href = "#18";
});

let navA5 = document.getElementById("navA5");

navA5.addEventListener("click", () => {
  window.location.href = "#19";
});

let navA6 = document.getElementById("navA6");

navA6.addEventListener("click", () => {
  window.location.href = "#20";
});

let navA7 = document.getElementById("navA7");

navA7.addEventListener("click", () => {
  window.location.href = "#_";
});

let navA8 = document.getElementById("navA8");

navA8.addEventListener("click", () => {
  window.location.href = "#__";
});
