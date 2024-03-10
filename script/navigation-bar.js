(() => {
    const navigationBtns = document.querySelectorAll('.nav__hreflink');
    navigationBtns.forEach((btn) => {
        btn.addEventListener('click', () => {

            navigationBtns.forEach((btn) => {
                btn.classList = "nav__hreflink"
            })

            btn.classList.toggle('nav__hreflink--active')
        })
    })
})()