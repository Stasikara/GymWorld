


/*function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
} */

  const btn = document.getElementById("aboutme");
const box = document.getElementById("infoBox");
const closeBtn = document.querySelector(".closeBtn");

btn.addEventListener("click", () => {
  box.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  box.style.display = "none";
});