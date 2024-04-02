import Account from "./Account";

export default class Current_Account extends Account{
    Interest_rate: number;
    constructor(ano: (string|number) = 'unknown' , balance: number = 1 , date: number = Date.now(),interstrate: number = 20 ){
        super(ano,balance,date);
        this.Interest_rate = interstrate ;
    }
}