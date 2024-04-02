var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee(emp) {
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = emp.address;
    }
    Object.defineProperty(Employee.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
;
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
var emp1 = new Employee(EmployeeData);
//console.log(emp1);
//!6
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manager) {
        return _super.call(this, manager) || this;
    }
    Manager.prototype.GetAddress = function () {
        return this.address;
    };
    return Manager;
}(Employee));
var man1 = new Manager(EmployeeData);
var Account = /** @class */ (function () {
    function Account(ano, balance, date) {
        if (ano === void 0) { ano = 'unknown'; }
        if (balance === void 0) { balance = 0; }
        if (date === void 0) { date = Date.now(); }
        this.Acc_no = ano;
        this.Balance = balance;
        this.Date_of_openning = date;
    }
    Account.prototype.addCustomer = function () {
        console.log("Added a customer");
    };
    Account.prototype.removeCustomer = function () {
        console.log("Removed a customer");
    };
    Account.prototype.debitAmount = function () {
        console.log("Your debit amount");
    };
    Account.prototype.creditAmount = function () {
        console.log("Your credit amount");
    };
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Account;
}());
var acc1 = new Account("A007", 800000);
console.log(acc1);
acc1.addCustomer();
console.log(acc1.getBalance());
acc1.creditAmount();
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(ano, balance, date) {
        if (ano === void 0) { ano = 'unknown'; }
        if (balance === void 0) { balance = 1; }
        if (date === void 0) { date = Date.now(); }
        return _super.call(this, ano, balance, date) || this;
    }
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(ano, balance, date) {
        if (ano === void 0) { ano = 'unknown'; }
        if (balance === void 0) { balance = 1; }
        if (date === void 0) { date = Date.now(); }
        return _super.call(this, ano, balance, date) || this;
    }
    return Current_Account;
}(Account));
var acc2 = new Saving_Account("B008", 7004);
acc2.Min_balance = 500;
console.log(acc2);
