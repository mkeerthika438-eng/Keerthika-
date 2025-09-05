// Smooth scroll for anchor links

document.addEventListener("click", function (e) {

  if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {

    const href = e.target.getAttribute("href");

    if (href === "#" || href === "#!") return;

    const el = document.querySelector(href);

    if (el) {

      e.preventDefault();

      el.scrollIntoView({ behavior: "smooth", block: "start" });

    }

  }

});

// Simple contact form handler

document.getElementById("contactForm").addEventListener("submit", function (ev) {

  ev.preventDefault();

  const name = document.getElementById("name").value.trim();

  if (!name) {

    alert("Please enter your name.");

    return;

  }

  alert("Thank you, " + (name || "") + "! Your message has been sent.");

  this.reset();

});