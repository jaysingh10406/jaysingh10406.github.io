// Highlights the nav link for whichever section is currently in view.
(function () {
  const sections = document.querySelectorAll("main .section, header.hero");
  const navLinks = document.querySelectorAll(".nav__links a");

  if (!sections.length || !navLinks.length) return;

  const linkFor = (id) =>
    Array.from(navLinks).find((a) => a.getAttribute("href") === `#${id}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.remove("nav__links--active"));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add("nav__links--active");
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
})();
