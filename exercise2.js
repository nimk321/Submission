class Account {
    constructor(balance, ownerName, type) {
        this.balance = balance;
        this.ownerName = ownerName;
        this.type = type;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into ${this.ownerName}'s ${this.type} account.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.ownerName}'s ${this.type} account.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    summary() {
        return {
            ownerName: this.ownerName,
            type: this.type,
            balance: this.balance
        };
    }
}

