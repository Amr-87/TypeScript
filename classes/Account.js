"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Account;
