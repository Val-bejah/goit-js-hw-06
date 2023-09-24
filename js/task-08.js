document.addEventListener("submit", function (event) {
  // function myFunction(event) {
  event.preventDefault();
  let form = document.querySelector(".login-form");
  let email = form.email.value;
  let password = form.password.value;

  if (email.length > 0 && password.length > 0) {
    console.log("Email: " + email + " Password: " + password);
  } else {
    alert("Todos los campos son obligatorios");
  }
  form.reset();
});
