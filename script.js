const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}
updateButtonText();

themeBtn.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  let next;

  if (current === "dark") {
    next = "light";
  } else {
    next = "dark";
  }

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateButtonText();
});

function updateButtonText() {
  if (root.getAttribute("data-theme") === "dark") {
    themeBtn.textContent = "☀️ Light";
  } else {
    themeBtn.textContent = "🌙 Dark";
  }
}

const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}
