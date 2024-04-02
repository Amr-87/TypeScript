import IAccount from "../interfaces/IAccount";

export default class Account implements IAccount{
    Acc_no: (string|number);
    Balance: number;
    
    Date_of_openning: number;

    constructor(ano: (string|number) = 'unknown' , balance: number = 0 , date: number = Date.now()){
        this.Acc_no = ano;
        this.Balance = balance;
        this.Date_of_openning = date;
    }

    addCustomer() {
        console.log("Added a customer");
    }
    removeCustomer() {
        console.log("Removed a customer");
    }
    debitAmount(){
        console.log("Your debit amount");
    }
    creditAmount(){
        console.log("Your credit amount");
    }
    getBalance(){
        return this.Balance;
    }
}