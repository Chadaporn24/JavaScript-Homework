const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = []; // Optional if you want to keep track in array

addBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Save to array
  tasks.push(taskText);

  // Create elements
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.style.marginRight = "5px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "-";

  // ✔ Mark as complete
  doneBtn.addEventListener("click", function() {
    span.classList.toggle("completed");
  });

  // - Delete task
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);

    // Optional: remove from array
    const index = tasks.indexOf(taskText);
    if (index > -1) {
      tasks.splice(index, 1);
    }
  });

  // Add to DOM
  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
