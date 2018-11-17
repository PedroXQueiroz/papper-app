"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../../models/user");
var core_1 = require("@angular/core");
var storage_1 = require("@ionic/storage");
var auth_exception_1 = require("../../exceptions/auth-exception");
var register_excpetion_1 = require("../../exceptions/register-excpetion");
var UserServiceLocal = /** @class */ (function () {
    function UserServiceLocal(_storage) {
        this._storage = _storage;
    }
    UserServiceLocal.prototype.authenticate = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            var usersData, _i, usersData_1, currentUserData, currentUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('users')];
                    case 1:
                        usersData = _a.sent();
                        if (!usersData) {
                            throw new auth_exception_1.AuthException();
                        }
                        for (_i = 0, usersData_1 = usersData; _i < usersData_1.length; _i++) {
                            currentUserData = usersData_1[_i];
                            currentUser = new user_1.User(currentUserData);
                            if (currentUser.login.username == login.username && currentUser.login.password == login.password) {
                                return [2 /*return*/, currentUser];
                            }
                        }
                        throw new auth_exception_1.AuthException();
                }
            });
        });
    };
    UserServiceLocal.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var usersData, users, userIndex, userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('users')];
                    case 1:
                        usersData = _a.sent();
                        if (!usersData) {
                            users = new Array();
                        }
                        else {
                            users = usersData.map(function (usrData) { return new user_1.User(usrData); });
                        }
                        userIndex = users.findIndex(function (usr) { return usr.login.username == user.login.username; });
                        if (userIndex != -1) {
                            throw new register_excpetion_1.RegisterException('username alredy exists');
                        }
                        this._validateUser(user);
                        userId = users.length + 1;
                        user.id = userId;
                        users.push(user);
                        this._storage.set('users', users);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserServiceLocal.prototype.remove = function (user) {
        throw new Error("Method not implemented.");
    };
    UserServiceLocal.prototype.update = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var usersData, users, userIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('users')];
                    case 1:
                        usersData = _a.sent();
                        if (!usersData) {
                            return [2 /*return*/];
                        }
                        users = usersData.map(function (usr) { return new user_1.User(usr); });
                        userIndex = users.findIndex(function (usr) { return usr.id == user.id; });
                        users[userIndex] = user;
                        return [4 /*yield*/, this._storage.set('users', users)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserServiceLocal.prototype._validateUser = function (user) {
        if (!user.login.username || user.login.username == '') {
            throw new register_excpetion_1.RegisterException('Is required inform a username');
        }
        if (!user.login.password || user.login.password == '') {
            throw new register_excpetion_1.RegisterException('Is required inform a password');
        }
        if (!user.sources || user.sources.length < 1) {
            throw new register_excpetion_1.RegisterException('Is required at last one new source');
        }
    };
    UserServiceLocal = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], UserServiceLocal);
    return UserServiceLocal;
}());
exports.UserServiceLocal = UserServiceLocal;
//# sourceMappingURL=user-service-local.js.map