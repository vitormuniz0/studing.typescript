// Muniz Bank

// name , accountBank
// depositar , sacar

class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (name:string) =>{
    console.log("Olá", name, "Voce depositou dinheiro");
  }

  withdraw = () =>{
    console.log("Voce sacou")
  }
}

const newAccount: Account = new Account('Vitor', 2);
newAccount.deposit("Vitor");
