"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthException = /** @class */ (function () {
    function AuthException() {
    }
    Object.defineProperty(AuthException.prototype, "message", {
        get: function () {
            return 'Authentication failed, username or password are incorrect';
        },
        enumerable: true,
        configurable: true
    });
    return AuthException;
}());
exports.AuthException = AuthException;
//# sourceMappingURL=auth-exception.js.map