const sendMail = (e, t, r) => {
    let l = { fullName: e, email: t, message: r };
    emailjs.send("service_d74r2md", "template_w3bn7aa", l);
  },
  form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let t = document.querySelector(".js-fullName").value,
    r = document.querySelector(".js-email").value,
    l = document.querySelector(".js-message").value;
  sendMail(t, r, l);
  let n = document.querySelector(".js-submitBtnContent");
  form.reset(),
    (n.innerText = "Thank you!"),
    setTimeout(() => {
      n.innerText = "Send Message";
    }, 5e3);
});
