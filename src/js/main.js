window.addEventListener("load", () => {
  const nav = document.querySelector(".header__nav");
  const icon = document.querySelector(".header__icon");

  const button = document.querySelectorAll(".buttons");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".overlay__close");

  const btns = document.querySelectorAll(".btns");
  const overlays = document.querySelector(".overlays");
  const closes = document.querySelector(".overlays__closes");

  nav &&
    icon.addEventListener("click", () => {
      nav.classList.toggle("header__active");
      icon.classList.toggle("header__active");
    });

  button.forEach((item) => {
    item.addEventListener('click', () => {
       overlay.style.display = "block";
    })
  })  

  close.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  btns.forEach((item) => {
    item.addEventListener('click', () => {
       overlays.style.display = "block";
    })
  })  

  closes.addEventListener("click", () => {
    overlays.style.display = "none";
  });

});
