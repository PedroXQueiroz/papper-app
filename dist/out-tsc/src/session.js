"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./models/user");
var Session = /** @class */ (function () {
    function Session() {
    }
    Session_1 = Session;
    Object.defineProperty(Session.prototype, "isLogged", {
        get: function () {
            return Session_1._user != null && Session_1._user != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "user", {
        get: function () {
            var userToUse = Session_1._user ? Session_1._user : new user_1.User();
            return userToUse;
        },
        set: function (user) {
            Session_1._user = user;
        },
        enumerable: true,
        configurable: true
    });
    var Session_1;
    Session = Session_1 = __decorate([
        core_1.Injectable()
    ], Session);
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map