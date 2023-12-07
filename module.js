const open = document.getElementById("hamburger");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-adress");
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  container.classList.remove("show-adress");
  open.style.display = "block";
  close.style.display = "none";
});
