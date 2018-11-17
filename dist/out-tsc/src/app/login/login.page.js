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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var core_1 = require("@angular/core");
var login_1 = require("../../models/login");
var angular_1 = require("@ionic/angular");
var session_1 = require("../../session");
var auth_exception_1 = require("../../exceptions/auth-exception");
var LoginPage = /** @class */ (function () {
    function LoginPage(_userService, _navController, _currentSession, _toastCtrl) {
        this._userService = _userService;
        this._navController = _navController;
        this._currentSession = _currentSession;
        this._toastCtrl = _toastCtrl;
    }
    Object.defineProperty(LoginPage.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (login) {
            this._login = login;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.ngOnInit = function () {
        this._login = new login_1.Login();
    };
    LoginPage.prototype.submitLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentuser, ex_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, this._userService.authenticate(this._login)];
                    case 1:
                        currentuser = _a.sent();
                        this._currentSession.user = currentuser;
                        this._navController.navigateForward("report");
                        return [3 /*break*/, 7];
                    case 2:
                        ex_1 = _a.sent();
                        toast = void 0;
                        if (!(ex_1 instanceof auth_exception_1.AuthException)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._toastCtrl.create({
                                message: ex_1.message,
                                duration: 3600,
                                position: 'bottom'
                            })];
                    case 3:
                        toast = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this._toastCtrl.create({
                            message: 'unknow error',
                            duration: 3600,
                            position: 'bottom'
                        })];
                    case 5:
                        toast = _a.sent();
                        _a.label = 6;
                    case 6:
                        console.error(ex_1);
                        toast.present();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.registerNewUser = function () {
        // VISANDO QUE UM NOVO USUÁRIO SERÁ CRIADO, O QUE ESTÁ LOGADO NO MOMENTO NÃO DEVE SER MODIFICADO
        // PARA ISSO ELE É DESLOGADO PARA QUE NÃO SEJA HABILITADA A EDIÇÃO DELE NA PÁGINA DE PERFIL (PROFILE)
        this._currentSession.user = null;
        this._navController.navigateForward("profile");
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __param(0, core_1.Inject("user-service")),
        __metadata("design:paramtypes", [Object, angular_1.NavController,
            session_1.Session,
            angular_1.ToastController])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map