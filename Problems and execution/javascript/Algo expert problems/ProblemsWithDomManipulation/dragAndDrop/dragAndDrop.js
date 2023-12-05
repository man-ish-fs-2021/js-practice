const dropZones = document.querySelectorAll(".drop-zone");
const items = document.querySelectorAll(".item");
const unrankedElement = document.getElementById("unranked-drop-zone");
let currentDrag;

function handleDragStart(e) {
  e.stopPropagation();
  currentDrag = this;
}
function handleDragOver(e) {
  e.preventDefault();
}
function handleDrop() {
  console.log({ this: this, currentDrag });
  if (this && !(currentDrag.parentNode === this)) {
    this.appendChild(currentDrag);
  }
  currentDrag = null;
}
function handleDblClick() {
  console.log({ this: this, unrankedElement });
  if (this.parentNode !== unrankedElement) {
    unrankedElement.appendChild(this);
  }
}
items.forEach((eachItem) => {
  eachItem.addEventListener("dragstart", handleDragStart);
  eachItem.addEventListener("dblclick", handleDblClick);
});
dropZones.forEach((eachDropZone) => {
  eachDropZone.addEventListener("drop", handleDrop);
  eachDropZone.addEventListener("dragover", handleDragOver);
});
