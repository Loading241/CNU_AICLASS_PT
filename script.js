const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const detailButtons = document.querySelectorAll(".details-btn");
const toast = document.getElementById("toast");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  });
});
