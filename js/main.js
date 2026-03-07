// Scrollspy — highlight active nav item
(function () {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = "#" + entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === targetId,
            );
          });
        }
      });
    },
    { rootMargin: "0px 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((s) => observer.observe(s));
})();
