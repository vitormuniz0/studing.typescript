export abstract class DioAccount {
    private readonly name: string;
    private readonly  accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;
  
    constructor(name: string, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }

    getName = ():string =>{
      return this.name
    }
  
    deposit(quantity:number):void {
      if(this.validateStatus()){
        this.balance += quantity;
        console.log("Deposito Realizado com sucesso!")
        console.log("Seu Saldo agora é ", this.balance)
      } else {
        throw new Error("Conta Invalida");
      }
    }
  
    withdraw = (quantity:number):void =>{
      if(this.validateStatus() && quantity <= this.balance){
        this.balance -= quantity;
        console.log("Saque Realizado com sucesso!")
        console.log("Seu Saldo agora é ", this.balance)
      } else {
        throw new Error("Conta Invalida ou saldo negativo");
      }
    }
  
    getBalance = ():number =>{
      return this.balance
    }

    getStatus(): boolean {
      return this.status;
    }

    private validateStatus = ():boolean =>{
      if(this.status){
        return this.status
      }
      
      throw new Error("Conta Invalida");
  
    }
}
