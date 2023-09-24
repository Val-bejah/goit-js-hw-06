let counterValue = 0;
let counter = document.getElementById("#counter");
console.log(counter);

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", (element) => {
    let isIncrement = element.target.getAttribute("data-action");
    if (isIncrement === "increment") {
      counterValue = counterValue+1
    } else {
      counterValue = counterValue-1
    }
    document.getElementById("value").innerHTML = counterValue;
  });
}
