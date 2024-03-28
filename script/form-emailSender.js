const sendMail = (fullName, email, message) => {
  const serviceID = "service_d74r2md";
  const templateID = "template_w3bn7aa";
  let params = {
    fullName,
    email,
    message,
  };
  emailjs.send(serviceID, templateID, params);
};
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector(".js-fullName").value;
  const emailAddress = document.querySelector(".js-email").value;
  const message = document.querySelector(".js-message").value;
  sendMail(fullName, emailAddress, message);
  const submitBtn = document.querySelector(".js-submitBtnContent");
  form.reset();
  submitBtn.innerText = "Thank you!";

  setTimeout(() => {
    submitBtn.innerText = "Send Message";
  }, 5000);
});
