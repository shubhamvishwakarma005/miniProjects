const myTaskBtn = document.getElementById("my-task-btn");
const plannedBtn = document.getElementById("task-planned");
const allTaskBtn = document.getElementById("all-Task");
const impTaskBtn = document.getElementById("imp-task");

const addTaskSection = document.getElementById("add-tasks");
const allTaskSection = document.getElementById("task-list-section");
const importantSection = document.getElementById("important-section");
const plannedSection = document.getElementById("planned-section");

function showOnly(section) {
  addTaskSection.style.display = "none";
  allTaskSection.style.display = "none";
  importantSection.style.display = "none";
  plannedSection.style.display = "none";

  section.style.display = section === addTaskSection ? "flex" : "block";
}

myTaskBtn.addEventListener("click", () => showOnly(addTaskSection));
allTaskBtn.addEventListener("click", () => {
  showOnly(allTaskSection);
  renderTasks();
});
impTaskBtn.addEventListener("click", () => {
  showOnly(importantSection);
  renderImportantTasks();
});
plannedBtn.addEventListener("click", () => {
  showOnly(plannedSection);
  renderPlannedTasks();
});

const addTaskBtn = document.getElementById("ad-task-btn");
const titleBox = document.getElementById("task-title");
const contentBox = document.getElementById("task-content");

addTaskBtn.addEventListener("click", () => {
  const title = titleBox.innerText.trim();
  const content = contentBox.innerText.trim();
  if (!title && !content) {
    alert("Please fill title and note!");
    return;
  }

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const task = {
    id: Date.now().toString(),
    title,
    content,
    date,
    time,
    important: false,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  titleBox.innerText = "Untitled Task";
  contentBox.innerText = "Write your notes here...";

  renderTasks();
  renderImportantTasks();
  renderPlannedTasks();

  alert("Task Saved!");
  showOnly(allTaskSection);
});

const allTaskList = document.getElementById("all-tasks-list");

function renderTasks() {
  allTaskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length === 0) {
    allTaskList.innerHTML = "<p>No tasks added yet.</p>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.content}</p>
      <p style="font-size: 14px; color: gray;">${task.date} - ${task.time}</p>
      <button onclick="toggleImportant('${task.id}')">${task.important ? "⭐" : "☆"}</button>
    `;
    allTaskList.appendChild(li);
  });
}

function toggleImportant(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map(task => task.id === taskId ? { ...task, important: !task.important } : task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  renderImportantTasks();
}

const importantTaskList = document.getElementById("important-tasks-list");

function renderImportantTasks() {
  importantTaskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const importantTasks = tasks.filter(task => task.important);

  if (importantTasks.length === 0) {
    importantTaskList.innerHTML = "<p>No important tasks yet.</p>";
    return;
  }

  importantTasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.content}</p>
      <p style="font-size: 14px; color: gray;">${task.date} - ${task.time}</p>
      <button onclick="toggleImportant('${task.id}')">⭐ Unpin</button>
    `;
    importantTaskList.appendChild(li);
  });
}

const plannedTaskList = document.getElementById("planned-tasks-list");

function renderPlannedTasks() {
  plannedTaskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length === 0) {
    plannedTaskList.innerHTML = "<p>No planned tasks yet.</p>";
    return;
  }

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.content}</p>
      <p><strong>Date:</strong> ${task.date}</p>
      <p><strong>Time:</strong> ${task.time}</p>
    `;
    plannedTaskList.appendChild(div);
  });
}
