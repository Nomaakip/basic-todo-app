function createItem() {
    const desc = document.getElementById('todo').value;
    if (desc) {
        const task = {
            desc
        }
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    loadItem();
}

function loadItem() {
    const tasksContainer = document.getElementById('taskdiv');
    tasksContainer.innerHTML = "";

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        const tasksText = `<div id="atask">TODO
       <h2>${task.desc}</h2>
       <br>
       <button onclick="removeTask(${index})">remove</button>
       </div>`;
       taskElement.innerHTML = tasksText;
        tasksContainer.appendChild(taskElement);
    });
}


function removeTask(index) {
       let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.splice(index, 1);

        localStorage.setItem("tasks", JSON.stringify(tasks));
  
  loadItem();
}

loadItem();
