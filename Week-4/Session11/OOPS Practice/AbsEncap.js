class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    getBalance() {
        return this.#balance;
    }
}

class CheckingAccount extends BankAccount {
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }
}

class SavingsAccount extends BankAccount {
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        } else {
            console.log('Withdrawal failed. Insufficient funds');
        }
    }
}

const checkingAcc = new CheckingAccount('AC001', 1000, 'John Doe');
checkingAcc.deposit(500);
checkingAcc.withdraw(200);
console.log(checkingAcc.getBalance());

const savingsAcc = new SavingsAccount('AC002', 2000, 'Jane Smith');
savingsAcc.deposit(1000);
savingsAcc.withdraw(5000);
console.log(savingsAcc.getBalance());