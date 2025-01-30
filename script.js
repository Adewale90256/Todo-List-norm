const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("addToDoBtn");

addToDoBtn.addEventListener("click", () => {
  const newToDoText = newToDoInput.value;

  if (newToDoText !== "") {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newToDoText;
    const deleteToDoBtn = document.createElement("button");
    deleteToDoBtn.innerText = "x";
    deleteToDoBtn.classList.add("delete-todo-btn");
    deleteToDoBtn.addEventListener("click", function () {
      newTodoItem.remove();
    });

    newTodoItem.appendChild(deleteToDoBtn);
    todoList.appendChild(newTodoItem);
    newToDoInput.value = "";
  }
});
