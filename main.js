const divContent = document.querySelector("#content");
const divProjects = document.querySelector("#projects");
const divNavbar = document.querySelector("#navbar");
const divShowMenu = document.querySelector("#showMenu");
const divCloseMenu = document.querySelector("#closeMenu");

console.log(divNavbar);
const toogleMenu = (e) => {
  if (divNavbar.classList.contains("hideNavbar")) {
    divNavbar.classList = "navbar showNavbar";
    divShowMenu.classList = "menu hideNavbar";
    divCloseMenu.classList = "close-menu showNavbar";
    divContent.style.display = "inline-block";
  } else {
    divNavbar.classList = "navbar hideNavbar";
    divShowMenu.classList = "menu showNavbar";
    divCloseMenu.classList = "close-menu hideNavbar";
  }
  console.log(divNavbar.classList);
};

divProjects.addEventListener("click", toogleMenu);
