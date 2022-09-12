class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

const usuario: UserAccount = new UserAccount('0000000', "Lucas", 18)

console.log(usuario)

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
}

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

}