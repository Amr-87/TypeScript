
//Main

//!5
import { Address } from './interfaces/Address';
import IEmployee from './interfaces/IEmployee';
//!6
import Employee from './classes/Employee';
import Manager from './classes/Manager';
import IAccount from './interfaces/IAccount';
import Account from './classes/Account' ;
import Current_Account from './classes/Current_Account';
import Saving_Account from './classes/Saving_Account';
//!1
let nArray: number[];
nArray = [3,4,5];
//console.log(nArray);

//!2
let snArray: (string|number)[];
snArray = ["amr" , 7 , 8 , 'gamal'];
snArray.push(9);
snArray.push('aboulela');
//snArray.forEach((val)=>console.log(val));

//!3
type numberOrBoolean = number|boolean ;
let nboolvar: numberOrBoolean = 5 ;
nboolvar = true ;

//!4
let greeting = (name1: string , name2: string):void => console.log(`hello ${name1} , hello ${name2}`);
//greeting('aaa','bbb');

const EmployeeData: IEmployee = {
    id: 1,
    name: "Leanne Graham" ,
    username: 'bret',
    email: "Sincere@april.biz" ,
    address:
        { street: "Kulas Light" ,
        suite: "Apt. 556" ,
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo:
        { lat: "-37.3159", lng: "81.1496" } }
}

const emp1 = new Employee(EmployeeData);
console.log(emp1);

const man1 = new Manager(EmployeeData);
//console.log(man1.GetAddress());

//!7

let acc1 = new Account("A007",800000);
console.log(acc1);
acc1.addCustomer();
console.log( acc1.getBalance() );
acc1.creditAmount();

let acc2 = new Saving_Account("B008",7004);
acc2.Min_balance=500;
let acc3 = new Current_Account(7,50000,342024);
console.log(acc2);
console.log(acc3);