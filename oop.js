// classes
class Car {
    constructor(name, model, year){
        this.name = name
        this.model = model
        this.year = year 
    }
    displayInfo(){
        return(`this is s ${this.name} ${this.model} that was developed in ${this.year}`)
    }
}
class User{
    constructor(fullName, email, phone, password){
        this.fullName = fullName
        this.email = email
        this.phone = phone
        this.password = password
    }
    login(){
        return(`this ${this.email} has logged in successfully `)
    }
    logout(){
        return(`this ${this.email} has logout in successfully `)
    }

}

// Abstraction 
const myCar = new Car("Benz", "G-wagon", "2024")

const newCar = new Car("ferrari", "lamborgini urus", "2024")
const newUser = new User("Bozsbaby", "bozsbaby@gmail", "090887876", "Haywhy044")
console.log(newCar)
console.log(newUser)
console.log(newUser.login());
console.log(newUser.logout());

// encapsulation
class BankAccount{
    #balance
    constructor(name, email, phone, initialBalance){
        this.name = name
        this.email = email
        this.phone = phone
        this.accNumber = phone
        this.#balance = initialBalance
    }

    deposit(amount){
        if (amount > 50){
            this.#balance += amount
        }
    }
    withdraw(amount){
        if (amount > 50 && amount <= this.#balance){
            this.#balance -= amount
        }
        else {
            console.log("insufficient fundz oleeee")
        }
    }
    getBalance(){
        return this.#balance;
    }
}

const myBankAcc = new BankAccount("Ayomideblessing", "ayom@moneylong", "0989887766", 5000000000)
    console.log(myBankAcc);

    myBankAcc.deposit(5000000)
    myBankAcc.withdraw(20000000)
    console.log(myBankAcc.getBalance());


// inheritance
class SavingsAcc extends BankAccount {
    constructor (name, email, phone, initialBalance, interestRate){
    super(name, email, phone, initialBalance)
    this.interestRate = interestRate

    
    }
    applyInterest(){
        const interest = this.getBalance() * this.interestRate / 100
        this.deposit(interest)
        console.log(`interest of ${interest} added successfully `)
    }
   
}
const mySavingsAcct = new SavingsAcc("Ayomideblessing", "ayom@moneylong", "0989887766", 5000000000, 3.5)
mySavingsAcct.deposit(100000)
mySavingsAcct.withdraw(400000000)
mySavingsAcct.applyInterest()
console.log(mySavingsAcct.getBalance())



// polymorphism
class FixedDepositACC extends BankAccount {
    constructor(name, email, phone, initialBalance, interestRate, maturityDate) {
        super(name, email, phone, initialBalance)
        this.interestRate = interestRate
        this.maturityDate = maturityDate
    }
    applyInterest(){
        const interest = this.getBalance() * this.interestRate / 100
        this.deposit(interest)
        console.log(`interest of ${interest} will be added after ${this.maturityDate} month`)
    }
    withdraw(){
       console.log(`withdrawals are not allowed during the locked period of ${this.maturityDate}`)
    }
}
const myFixedDeposit = new FixedDepositACC("Ayomideblessing", "ayom@moneylong", "0989887766", 5000000000, 3.5, 12)
myFixedDeposit.applyInterest()
myFixedDeposit.deposit(20000000)
myFixedDeposit.withdraw(56000)
console.log(myFixedDeposit.getBalance())