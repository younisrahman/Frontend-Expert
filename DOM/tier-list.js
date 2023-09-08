let draggedItem;

document.querySelectorAll(".item").forEach(setUpItem);
document.querySelectorAll(".drop-zone").forEach(setUpDropZone);

function setUpItem(item) {
  item.addEventListener("dragstart", onDragItem);
  item.addEventListener("dblclick", onDoubleClickItem);
  item.draggable = true; // Make items draggable
}

function setUpDropZone(dropZone) {
  dropZone.addEventListener("dragover", onDragOverDropZone); // Change 'drop' to 'dragover'
  dropZone.addEventListener("drop", onDropOverDropZone);
  dropZone.addEventListener("dragleave", onDragLeaveDropZone); // Add 'dragleave' event
}

function onDragItem(event) {
  draggedItem = event.target;
}

function onDoubleClickItem() {
  const unrankedDropZone = document.getElementById("unranked-drop-zone");
  if (unrankedDropZone !== this.parentNode) {
    unrankedDropZone.appendChild(this);
  }
}

function onDropOverDropZone(event) {
  // Add 'event' parameter
  event.preventDefault();
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}

function onDragOverDropZone(event) {
  // Add 'event' parameter
  event.preventDefault();
}

function onDragLeaveDropZone(event) {
  // Add 'event' parameter
  event.preventDefault();
}
