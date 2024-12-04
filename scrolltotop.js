const toTop = document.querySelector(".to-top");

const scrollToTopButton = document.querySelector("#scrollToTopButton");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

scrollToTopButton.addEventListener("click", () => {
    window.scrollBy({
        top: -7000,
        behavior : "smooth"
      });
});
