"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login = /** @class */ (function () {
    function Login(login) {
        if (login === void 0) { login = null; }
        if (!login) {
            return;
        }
        this._username = login._username;
        this._password = login._password;
    }
    Object.defineProperty(Login.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Login.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: true,
        configurable: true
    });
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map