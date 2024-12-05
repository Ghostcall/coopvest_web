document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav_link_container ul li a");
  
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });
  