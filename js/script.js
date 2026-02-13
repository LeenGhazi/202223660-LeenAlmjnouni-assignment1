// 2) Theme toggle (Light/Dark)
const themeToggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggleBtn.textContent = theme === "dark" ? "☀️ Theme" : "🌙 Theme";
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    themeToggleBtn.textContent = "🌙 Theme";
  }
})();

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "light" ? "dark" : "light");
});

// 3) Smooth scrolling is in CSS (scroll-behavior: smooth)
// optional tiny UX
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => setTimeout(() => a.blur(), 150));
});

// 4) Form interaction (demo)
const form = document.getElementById("contactMeForm");
const statusEl = document.getElementById("formStatus");
const nameInput = document.getElementById("nameInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = (formData.get("name") || "").toString().trim();

  statusEl.textContent = "Sending...";
  statusEl.style.opacity = "0.9";

  setTimeout(() => {
    if (!name) {
      statusEl.textContent = "Please enter your name 🙂";
      nameInput.focus();
      return;
    }
    statusEl.textContent = `Thanks, ${name}! Your message is ready to be sent (demo).`;
    form.reset();
  }, 600);
});

// Footer year
document.getElementById("yearNow").textContent = new Date().getFullYear();
