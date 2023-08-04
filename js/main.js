const menuIcon = document.querySelector(".menu_icon")
const closeIcon = document.querySelector(".mobile_menu_container .close_icom")
const mobileMenuContainer = document.querySelector(".mobile_menu_container")
const drop = document.querySelector("")

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});



