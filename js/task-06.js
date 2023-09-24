// const input = document.querySelector(".input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

const input = document.getElementById("validation-input");

    input.addEventListener("blur", function () {
      const expectedLength = parseInt(input.getAttribute("data-length"), 10);
      const inputValue = input.value.trim();

      if (inputValue.length === expectedLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }
    });