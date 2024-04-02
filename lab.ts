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

//!5
interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}
class Employee implements IEmployee {
    id: number;
    name: string;
    private _username: string;
    email: string;
    address: Address;
    constructor(emp: IEmployee){
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = emp.address;
    }
    get username(): string {
        return this._username;
    } 
};

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
//console.log(emp1);

//!6
class Manager extends Employee{
    constructor(manager: IEmployee){
        super(manager);
    }
    GetAddress(): Address{
        return this.address;
    }
}

const man1 = new Manager(EmployeeData);
//console.log(man1.GetAddress());

//!7
interface IAccount{
    Date_of_openning: number;
    addCustomer();
    removeCustomer();
}

class Account implements IAccount{
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
let acc1 = new Account("A007",800000);
console.log(acc1);
acc1.addCustomer();
console.log( acc1.getBalance() );
acc1.creditAmount();

class Saving_Account extends Account{
    Min_balance: number;
    constructor(ano: (string|number) = 'unknown' , balance: number = 1 , date: number = Date.now()){
        super(ano,balance,date);
    }
}
class Current_Account extends Account{
    Interest_rate: number;
    constructor(ano: (string|number) = 'unknown' , balance: number = 1 , date: number = Date.now()){
        super(ano,balance,date);
    }
}
let acc2 = new Saving_Account("B008",7004);
acc2.Min_balance=500;
console.log(acc2);