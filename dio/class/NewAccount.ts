import { DioAccount } from "./DioAccount";

export class SecondPeople extends DioAccount {

    private balancePeople: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }


  deposit(quantity: number): void {
    this.balancePeople += quantity + 10;  // Atualiza o saldo
    console.log(`Depósito realizado com sucesso! Seu novo saldo é: R$ ${this.balancePeople}`);
  }

}

