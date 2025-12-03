const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll(".site-header nav a[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
