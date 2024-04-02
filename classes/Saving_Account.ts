
import Account from './Account';
export default class Saving_Account extends Account{
    Min_balance: number ;
    constructor(ano: (string|number) = 'unknown' , balance: number = 1 , date: number = Date.now(), minbal: number = 100){
        super(ano,balance,date);
        this.Min_balance = minbal ;
    }
}