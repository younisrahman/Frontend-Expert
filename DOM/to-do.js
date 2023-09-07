// Write your code here.
const todoList = document.getElementById("todo-list");
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeTodo);

function onClickAdd() {
  const li = createListItem(input.value);
  todoList.appendChild(li);
  input.value = "";
  addButton.disabled = true;
}
function onTypeTodo() {
  addButton.disabled = input.value.length === 0;
}
function createListItem(name) {
  const li = document.createElement("li");
  const heading = document.createElement("h2");
  heading.textContent = name;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", onClickDelete);

  li.appendChild(heading);
  li.appendChild(deleteButton);
  return li;
}
function onClickDelete() {
  this.parentNode.remove();
}
