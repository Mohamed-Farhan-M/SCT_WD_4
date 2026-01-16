const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks(){
  taskList.innerHTML="";
  tasks.forEach((task, index)=>{
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");

    li.innerHTML = `
      <div class="details">
        <span class="name">${task.name}</span>
        ${task.date ? `<span class="date">${task.date}</span>` : ""}
      </div>
      <div class="actions">
        <button onclick="toggleComplete(${index})">✔</button>
        <button onclick="editTask(${index})">✎</button>
        <button onclick="deleteTask(${index})">🗑</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

addBtn.onclick = ()=>{
  const name = taskInput.value.trim();
  const date = taskDate.value;

  if(!name) return alert("Enter a task!");

  tasks.push({
    name,
    date,
    completed:false
  });

  taskInput.value="";
  taskDate.value="";
  renderTasks();
};

function toggleComplete(i){
  tasks[i].completed = !tasks[i].completed;
  renderTasks();
}

function editTask(i){
  const newName = prompt("Edit task:", tasks[i].name);
  if(newName) tasks[i].name = newName;
  renderTasks();
}

function deleteTask(i){
  tasks.splice(i,1);
  renderTasks();
}

renderTasks();
