"use strict";
//Main
Object.defineProperty(exports, "__esModule", { value: true });
//!6
var Employee_1 = require("./classes/Employee");
var Manager_1 = require("./classes/Manager");
var Account_1 = require("./classes/Account");
var Current_Account_1 = require("./classes/Current_Account");
var Saving_Account_1 = require("./classes/Saving_Account");
//!1
var nArray;
nArray = [3, 4, 5];
//console.log(nArray);
//!2
var snArray;
snArray = ["amr", 7, 8, 'gamal'];
snArray.push(9);
snArray.push('aboulela');
var nboolvar = 5;
nboolvar = true;
//!4
var greeting = function (name1, name2) { return console.log("hello ".concat(name1, " , hello ").concat(name2)); };
//greeting('aaa','bbb');
var EmployeeData = {
    id: 1,
    name: "Leanne Graham",
    username: 'bret',
    email: "Sincere@april.biz",
    address: { street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" } }
};
//? 5,6 
var emp1 = new Employee_1.default(EmployeeData);
console.log(emp1);
var man1 = new Manager_1.default(EmployeeData);
//console.log(man1.GetAddress());
//!7
var acc1 = new Account_1.default("A007", 800000);
console.log(acc1);
acc1.addCustomer();
console.log(acc1.getBalance());
acc1.creditAmount();
var acc2 = new Saving_Account_1.default("B008", 7004);
acc2.Min_balance = 500;
var acc3 = new Current_Account_1.default(7, 50000, 342024);
console.log(acc2);
console.log(acc3);
