// Buggy Bank System Challenge

class bank {
    constructor(branche1, branche2, branche3) {
        this.branche1 = branche1;
        this.branche2 = branche2;
        this.branche3 = branche3;
    }
}

class peshawarbranche extends bank {
    constructor(branche1, account1) {
        super(branche1);
        this.account1 = account1;
    }
}

class account1 extends peshawarbranche {
    #Rs = 0;

    constructor(branche1 , account1Name, depositAmount) {
        super(branche1,account1Name);
        this.deposit(depositAmount); // ❌ Error: depositAmount is not defined

        console.log(`Amount: ${this.#Rs}, Account: ${this.account1}, Branch: ${this.branche1}`);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#Rs = amount; // ❌ Error: Rs is not declared, should be this.#Rs
        }
    }

    getBalance() {
        return this.#Rs; // ❌ Error: should be this.#Rs

    }
}

let acc = new account1("Peshawar", "Mehran", 2000);
console.log(acc.getBalance())
