// Имитация функции для получения списка пользователей
function fetchUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ]);
        }, 1000);
    });
}

// Имитация функции для получения списка задач пользователя
function fetchTasksForUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = {
                1: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }],
                2: [{ id: 3, title: 'Task 3' }],
                3: [{ id: 4, title: 'Task 4' }, { id: 5, title: 'Task 5' }, { id: 6, title: 'Task 6' }]
            };
            resolve(tasks[userId] || []);
        }, 1000);
    });
}

// Основная функция для загрузки данных пользователей и их задач
async function loadUserData(taskThreshold = 0) {
    try {
        const users = await fetchUsers();
        const userTasksPromises = users.map(user => 
            fetchTasksForUser(user.id).then(tasks => ({ ...user, tasks }))
        );

        let usersWithTasks = await Promise.all(userTasksPromises);

        // Фильтрация пользователей по количеству задач
        usersWithTasks = usersWithTasks.filter(user => user.tasks.length > taskThreshold);

        console.log(usersWithTasks);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

// Запуск основной функции
loadUserData(1); // Замените 1 на нужный порог количества задач
