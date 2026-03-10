  const header = document.querySelector(".header");
  const navLinks = document.querySelector(".header__nav-links");
  const navBtns = document.querySelector(".header__nav-btns");

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "menu-toggle";
  toggleBtn.innerHTML = "☰";

  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";

  const linksClone = navLinks.cloneNode(true);
  const btnsClone = navBtns.cloneNode(true);

  mobileMenu.appendChild(linksClone);
  mobileMenu.appendChild(btnsClone);

  header.appendChild(toggleBtn);
  header.appendChild(mobileMenu);

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    toggleBtn.innerHTML = mobileMenu.classList.contains("active") ? "✕" : "☰";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
      toggleBtn.innerHTML = "☰";
    }
  });
