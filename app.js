class bank {
    constructor(branche1,branche2,branche3 ) {
        this.branche1 = branche1;
        this.branche2 = branche2;
        this.branche3 = branche3;
    }
}

class peshawarbranche extends bank {
    constructor(branche1, account1,account2) {
        super(branche1)
        this.account1 = account1;
        this.account2 = account2;

    }
}
let pb = new peshawarbranche("Peshawar Branche", "Mehran");
console.log(pb.branche1)

class account1 extends peshawarbranche {
    #Rs=0;
    constructor(branches, account1Name,depositAmount) {
        super(branches, account1Name, "N/A");
        this.deposit(depositAmount);

        console.log(`Amount: ${this.#Rs}, Account: ${this.account1}, Branch: ${this.branche1}`);
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#Rs = amount;
        }
    }

    getammount() {
        return this.#Rs;
    }
}


let acc1 = new account1("PeshawarBranche","Mehran",10000);
console.log(acc1.branche1)
console.log(acc1.account1)
console.log(acc1.getammount())

//home work

// class bank {
//     constructor(branche1, branche2, branche3) {
//         this.branche1 = branche1;
//         this.branche2 = branche2;
//         this.branche3 = branche3;
//     }
// }

// class peshawarbranche extends bank {
//     constructor(branche1, account1, account2) {
//         super(branche1);
//         this.account1 = account1;
//         this.account2  = account2;
//     }
// }

// class account1 extends peshawarbranche {
//     #Rs = 0;

//     constructor(brancheName, account1Name, depositAmount) {
//         super(brancheName, account1Name, "N/A");
//         this.#Rs = depositAmount;
//         this.deposit(depositAmount);
//         console.log(`Amount: ${this.#Rs}, Account: ${this.account1}, Branch: ${this.branche1}`);
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#Rs = amount;
//         } else {
//             console.log("Invalid deposit amount");
//         }
//     }

//     getAmount() {
//         return this.#Rs;
//     }
// }

// // ✅ Object Create karo:
// let acc = new account1("Peshawar Branch", "Mehran", 500);
// // Output: Amount: 500, Account: Mehran, Branch: Peshawar Branch

// console.log("Current Balance:", acc.getAmount());  // Output: 500
