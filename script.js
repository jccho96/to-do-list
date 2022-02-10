const todoInput = document.querySelector(".todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.querySelector(".todo-list");
const summary = document.querySelector(".summary");
const numberOfItems = document.querySelectorAll(".todo-list").length;

console.log(numberOfItems);

addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function updateCount() {
  const count = todoList.childElementCount;
  summary.innerHTML = `You have ${count} tasks to do today!`;
}

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoButton = document.createElement("button");
  todoButton.classList.add("todo-btn");
  todoDiv.appendChild(todoButton);

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv);

  todoInput.value = "";

  updateCount();
}

todoInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addButton.click();
  }
});

function deleteCheck(event) {
  const item = event.target;

  //DELETE TODO
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
      updateCount();
    });
  }
  //CHECK MARK
  if (item.classList[0] === "todo-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    item.classList.toggle("checkmark");
  }
}
updateCount();
