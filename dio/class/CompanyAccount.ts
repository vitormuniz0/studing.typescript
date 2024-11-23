import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private balanceCompany: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(quantity: number): void {
    if (this.validateCompanyStatus()) {
      this.balanceCompany += quantity;
      console.log("Voce Pegou um emprestimo de ", quantity);
      console.log("Seu saldo agora é de ", this.balanceCompany);
    }
  }

  getBalanceCompany(): number {
    return this.balanceCompany;
  }

  deposit = (): void => {
    console.log("A empresa Depositou");
  };

  private validateCompanyStatus = (): boolean => {
    return this.getStatus();
  };
}
