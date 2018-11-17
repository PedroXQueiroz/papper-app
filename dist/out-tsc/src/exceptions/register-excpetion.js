"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterException = /** @class */ (function () {
    function RegisterException(message) {
        this._message = message;
    }
    Object.defineProperty(RegisterException.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return RegisterException;
}());
exports.RegisterException = RegisterException;
//# sourceMappingURL=register-excpetion.js.map