"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(ano, balance, date, interstrate) {
        if (ano === void 0) { ano = 'unknown'; }
        if (balance === void 0) { balance = 1; }
        if (date === void 0) { date = Date.now(); }
        if (interstrate === void 0) { interstrate = 20; }
        var _this = _super.call(this, ano, balance, date) || this;
        _this.Interest_rate = interstrate;
        return _this;
    }
    return Current_Account;
}(Account_1.default));
exports.default = Current_Account;
