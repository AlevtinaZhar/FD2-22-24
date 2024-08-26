document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  /**
   * Добавляет новую задачу в список задач.
   * Создает элемент списка с текстом задачи и кнопками для редактирования, удаления и выполнения.
   */
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return; // Не добавлять задачу, если текст пустой

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
                <input type="text" value="${taskText}" readonly />
                <button class="editButton">Edit</button>
                <button class="deleteButton">Delete</button>
                <button class="completeButton">Complete</button>
            `;
    taskList.appendChild(li); // Добавляем элемент в список
    taskInput.value = ""; // Очищаем поле ввода
  };

  addTaskButton.addEventListener("click", addTask); // Добавление задачи по нажатию на кнопку

  /**
   * Обрабатывает клики по элементам списка задач.
   * Позволяет редактировать, удалять или отмечать задачи как выполненные.
   */
  taskList.addEventListener("click", (event) => {
    const target = event.target;
    const taskItem = target.closest(".task-item");
    if (!taskItem) return; // Игнорировать клики вне элементов задачи

    const input = taskItem.querySelector("input");

    if (target.matches(".deleteButton")) {
      taskItem.remove(); // Удаление задачи
    } else if (target.matches(".editButton")) {
      if (input.hasAttribute("readonly")) {
        input.removeAttribute("readonly"); // Разрешить редактирование
        input.focus();
        target.textContent = "Save"; // Изменить текст кнопки на "Сохранить"
      } else {
        input.setAttribute("readonly", true); // Сохранить изменения
        target.textContent = "Edit"; // Изменить текст кнопки на "Редактировать"
      }
    } else if (target.matches(".completeButton")) {
      input.classList.toggle("completed"); // Отметить задачу как выполненную/невыполненную
    }
  });
});
