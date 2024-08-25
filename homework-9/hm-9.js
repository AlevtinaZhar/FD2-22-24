document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Функция для добавления новой задачи
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
            <input type="text" value="${taskText}" readonly />
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
            <button class="completeButton">Complete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  }

  // Добавляем задачу при нажатии кнопки
  addTaskButton.addEventListener("click", addTask);

  // Делегирование событий на родительском элементе
  taskList.addEventListener("click", (event) => {
    const target = event.target;
    const taskItem = target.closest(".task-item");

    if (!taskItem) return;

    if (target.classList.contains("deleteButton")) {
      taskItem.remove();
    } else if (target.classList.contains("editButton")) {
      const input = taskItem.querySelector("input");
      if (input.hasAttribute("readonly")) {
        input.removeAttribute("readonly");
        input.focus();
        target.textContent = "Save";
      } else {
        input.setAttribute("readonly", true);
        target.textContent = "Edit";
      }
    } else if (target.classList.contains("completeButton")) {
      const input = taskItem.querySelector("input");
      input.classList.toggle("completed");
    }
  });
});
