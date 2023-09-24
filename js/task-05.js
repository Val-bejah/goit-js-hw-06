
const inputName = document.getElementById("name-input");
const spanName = document.getElementById("name-output");

inputName.addEventListener("input", (e) => {
  let newValue = "Anonymous";
  if (e.target.value) {
    newValue = e.target.value;
  }
  spanName.textContent = newValue;
});
