(() => {
  const navigationBtns = document.querySelectorAll(".nav__hreflink");
  const articles = document.querySelectorAll("article");

  navigationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigationBtns.forEach((btn) => {
        btn.classList = "nav__hreflink";
      });

      const sectionName = btn.innerHTML.toLowerCase();

      console.log(sectionName);

      articles.forEach((article) => {
        article.classList.remove("active");
      });

      document.querySelector("." + sectionName).classList.add("active");
      btn.classList.toggle("nav__hreflink--active");
    });
  });
})();
