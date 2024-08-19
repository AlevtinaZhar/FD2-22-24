class BankAccount {
    constructor(initialBalance = 0) {
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
        console.log(`Пополнение на сумму ${amount} успешно. Текущий баланс: ${this.getBalance()}`);
      } catch (error) {
        console.error(error.message);
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
        console.log(`Снятие на сумму ${amount} успешно. Текущий баланс: ${this.getBalance()}`);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Метод для проверки баланса
    getBalance() {
      return this.balance;
    }
  
    // Метод для начисления процентов
    startInterest(interval, rate) {
      try {
        if (rate <= 0 || interval <= 0) {
          throw new Error("Процентная ставка и интервал должны быть больше нуля.");
        }
        this.stopInterest(); // Останавливаем предыдущий интервал, если есть
        this.interestInterval = setInterval(() => {
          const interest = this.balance * rate;
          this.deposit(interest);
          console.log(`Начислено ${interest} процентов. Текущий баланс: ${this.getBalance()}`);
        }, interval);
        console.log("Начисление процентов запущено.");
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Метод для остановки начисления процентов
    stopInterest() {
      if (this.interestInterval) {
        clearInterval(this.interestInterval);
        this.interestInterval = null;
        console.log("Начисление процентов остановлено.");
      }
    }
  
    // Метод для выполнения отложенных транзакций
    scheduleTransaction(type, amount, delay) {
      try {
        if (type !== "deposit" && type !== "withdraw") {
          throw new Error("Неверный тип транзакции. Ожидается 'deposit' или 'withdraw'.");
        }
        setTimeout(() => {
          if (type === "deposit") {
            this.deposit(amount);
          } else if (type === "withdraw") {
            this.withdraw(amount);
          }
        }, delay);
        console.log(`Транзакция ${type} на сумму ${amount} будет выполнена через ${delay} мс.`);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  
  // Тестирование
  const myAccount = new BankAccount(1000);
  
  // Пополнение
  myAccount.deposit(500); // Баланс: 1500
  
  // Снятие средств
  myAccount.withdraw(200); // Баланс: 1300
  
  // Ошибка при снятии средств
  myAccount.withdraw(2000); // Недостаточно средств
  
  // Проверка баланса
  console.log(`Текущий баланс: ${myAccount.getBalance()}`); // Баланс: 1300
  
  // Начисление процентов
  myAccount