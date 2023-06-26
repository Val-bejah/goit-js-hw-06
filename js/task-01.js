let items = document.querySelectorAll(".item");
console.log("Numero de categorias", items.length);
let itemsList = document.querySelectorAll("#categories > li");

const categoryArray = [];

itemsList.forEach((Element) => {
  console.log("Elements:" + Element.firstElementChild.textContent);
  console.log("Category:" + Element.lastElementChild.children.length);
});
