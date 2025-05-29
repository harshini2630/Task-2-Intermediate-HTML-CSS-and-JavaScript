window.onload = function () {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    taskList.innerHTML = stored;
    addEventListeners();
  }
};

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button onclick="completeTask(this)">✅</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  updateLocalStorage();
}

function completeTask(button) {
  const task = button.parentElement.previousElementSibling;
  task.classList.toggle("task-completed");
  updateLocalStorage();
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function addEventListeners() {
  document.querySelectorAll(".task-actions button:nth-child(1)").forEach(btn =>
    btn.onclick = () => completeTask(btn)
  );
  document.querySelectorAll(".task-actions button:nth-child(2)").forEach(btn =>
    btn.onclick = () => deleteTask(btn)
  );
}
