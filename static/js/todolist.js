
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");

function addTask() {
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var li = document.createElement("li");
    li.innerHTML = taskText + '<span class="delete" onclick="deleteTask(this)" style="color: red"><button style="background-color: red; width: 40px; color: black; margin-left: auto; border-radius: 40px;"> X </button></span>';
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(element) {
  element.parentElement.remove();
}
