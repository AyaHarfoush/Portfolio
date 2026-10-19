// ===== 1) زر الثيم (الميزة الإجبارية) =====
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement; // عنصر <html>

// لو المستخدم اختار ثيم قبل، نرجعه
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}
updateButtonText();

// لما المستخدم يضغط على الزر
themeBtn.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  let next;

  if (current === "light") {
    next = "dark";
  } else {
    next = "light";
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

// ===== 2) قائمة الموبايل =====
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
