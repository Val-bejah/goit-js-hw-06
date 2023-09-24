const fontSizeControl = document.getElementById("font-size-control");
const fontText = document.getElementById("text");
fontSizeControl.addEventListener("input", (e) => {
  let fontSizeVal = fontSizeControl.value + "px";
  fontText.style.fontSize = fontSizeVal;
});
