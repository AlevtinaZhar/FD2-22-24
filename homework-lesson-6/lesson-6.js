class BankAccount {
  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Начальный баланс не может быть отрицательным.");
    }
    this.balance = initialBalance;
    this.interestInterval = null;
  }

  // Метод для пополнения счета
  deposit(amount) {
    try {
      if (amount <= 0) {
        throw new Error("Сумма пополнения должна быть больше нуля.");
      }
      this.balance += amount;
      console.log(
        `Счет пополнен на ${amount}. Текущий баланс: ${this.balance}`
      );
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }

  // Метод для снятия средств
  withdraw(amount) {
    try {
      if (amount <= 0) {
        throw new Error("Сумма снятия должна быть больше нуля.");
      }
      if (amount > this.balance) {
        throw new Error("Недостаточно средств на счете.");
      }
      this.balance -= amount;
      console.log(`Снято ${amount}. Текущий баланс: ${this.balance}`);
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }

  // Метод для проверки баланса
  getBalance() {
    return this.balance;
  }

  // Метод для начисления процентов
  startInterest(interval, rate) {
    if (this.interestInterval !== null) {
      console.log("Проценты уже начисляются.");
      return;
    }
    this.interestInterval = setInterval(() => {
      this.balance += this.balance * (rate / 100);
      console.log(`Начислены проценты. Текущий баланс: ${this.balance}`);
    }, interval);
    console.log(
      `Начисление процентов запущено с интервалом ${interval} мс и ставкой ${rate}%`
    );
  }

  // Метод для остановки начисления процентов
  stopInterest() {
    if (this.interestInterval !== null) {
      clearInterval(this.interestInterval);
      this.interestInterval = null;
      console.log("Начисление процентов остановлено.");
    } else {
      console.log("Проценты не начисляются.");
    }
  }

  // Метод для выполнения отложенной транзакции
  scheduleTransaction(type, amount, delay) {
    setTimeout(() => {
      if (type === "deposit") {
        this.deposit(amount);
      } else if (type === "withdraw") {
        this.withdraw(amount);
      } else {
        console.error("Неизвестный тип транзакции.");
      }
    }, delay);
    console.log(
      `Транзакция ${type} на сумму ${amount} будет выполнена через ${delay} мс.`
    );
  }
}
// Создание нового банковского счета с начальным балансом 1000
let account1 = new BankAccount(1000);

// Пополнение счета
account1.deposit(500);

// Попытка пополнения счета недопустимой суммой
account1.deposit(-200);

// Снятие средств
account1.withdraw(300);

// Попытка снять больше средств, чем есть на счете
account1.withdraw(2000);

// Проверка баланса
console.log(`Текущий баланс: ${account1.getBalance()}`);

// Начисление процентов с интервалом 2 секунды и ставкой 5%
account1.startInterest(2000, 5);

// Остановить начисление процентов через 10 секунд
setTimeout(() => account1.stopInterest(), 10000);

// Запланировать пополнение на 1000 через 3 секунды
account1.scheduleTransaction('deposit', 1000, 3000);

// Запланировать снятие на 500 через 5 секунд
account1.scheduleTransaction('withdraw', 500, 5000);
