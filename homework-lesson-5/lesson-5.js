// Функция-конструктор для участников
function Participant(name, email) {
    this.name = name;
    this.email = email;
}

// Функция-конструктор для событий
function Event(title, date) {
    this.title = title;
    this.date = date;
    this.participants = []; // Инициализация пустого массива для участников
}

// Прототип для событий
Event.prototype.addParticipant = function(participant) {
    if (participant instanceof Participant) { // Проверяем, что participant - это объект, созданный от Participant
        this.participants.push(participant);
        console.log(`${participant.name} добавлен к событию "${this.title}".`);
    } else {
        console.log('Ошибка: участник должен быть объектом Participant.');
    }
};

Event.prototype.listParticipants = function() {
    if (this.participants.length === 0) {
        console.log(`У события "${this.title}" нет участников.`);
        return;
    }

    console.log(`Участники события "${this.title}":`);
    this.participants.forEach(participant => {
        console.log(`- ${participant.name} (${participant.email})`);
    });
};

Event.prototype.findParticipantByEmail = function(email) {
    const found = this.participants.find(participant => participant.email === email);

    if (found) {
        console.log(`Участник найден: ${found.name} (${found.email})`);
    } else {
        console.log(`Участник с email "${email}" не найден.`);
    }
};

// Примеры создания участников и событий
const participant1 = new Participant('Иван Иванов', 'ivan@example.com');
const participant2 = new Participant('Анна Смирнова', 'anna@example.com');
const participant3 = new Participant('Петр Петров', 'petr@example.com');

const event1 = new Event('Выпускной вечер', '2023-06-15');
const event2 = new Event('Научная конференция', '2023-07-20');

// Добавляем участников к событиям
event1.addParticipant(participant1);
event1.addParticipant(participant2);
event1.addParticipant('Не участник'); // Это не должно сработать

event2.addParticipant(participant3);

// Выводим список участников
event1.listParticipants();
event2.listParticipants();

// Поиск участника по email
event1.findParticipantByEmail('anna@example.com');
event1.findParticipantByEmail('unknown@example.com');