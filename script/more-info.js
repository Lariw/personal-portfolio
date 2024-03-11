(() => {
  const moreInfoBtn = document.querySelector(".js-menuRoll");
  const moreInfoContainer = document.querySelector(".aside__moreInfo");
  moreInfoBtn.addEventListener("click", () => {
    moreInfoContainer.classList.toggle("aside__moreInfo--active");
  });
})();
