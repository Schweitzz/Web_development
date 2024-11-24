// Select DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listener for form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const task = todoInput.value.trim();
  /* Get input value ,trim method used to remove leading white spaces
   * it doesn't trim from the middle only leading or last  */

  if (task) {
    addTask(task); // Add the task to the list
    todoInput.value = ""; // Clear the input field
  }
});

// Function to add a new task
function addTask(task) {
  const listItem = document.createElement("li");

  // Add the task text
  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  // Add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    listItem.remove(); // Remove the task
  });

  listItem.appendChild(deleteBtn);

  // Mark task as completed when clicked
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // Add the task to the list
  todoList.appendChild(listItem);
}
