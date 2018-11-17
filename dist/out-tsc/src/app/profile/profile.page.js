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
var user_1 = require("../../models/user");
var session_1 = require("../../session");
var angular_1 = require("@ionic/angular");
var sources_modal_page_1 = require("../sources-modal/sources-modal.page");
var register_excpetion_1 = require("../../exceptions/register-excpetion");
var invalid_password_excpetion_1 = require("../../exceptions/invalid-password-excpetion");
var ProfilePage = /** @class */ (function () {
    function ProfilePage(_articleService, _userService, _session, _modalCtrl, _alertCtrl, _navCtrl, _toastCtrl) {
        this._articleService = _articleService;
        this._userService = _userService;
        this._session = _session;
        this._modalCtrl = _modalCtrl;
        this._alertCtrl = _alertCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._user = this._session.user;
    }
    Object.defineProperty(ProfilePage.prototype, "currentPassword", {
        get: function () {
            return this._currentPassword;
        },
        set: function (password) {
            this._currentPassword = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "newPassword", {
        get: function () {
            return this._newPassword;
        },
        set: function (password) {
            this._newPassword = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "passwordConfirmation", {
        get: function () {
            return this._passwordConfirmation;
        },
        set: function (password) {
            this._passwordConfirmation = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: true,
        configurable: true
    });
    ProfilePage.prototype.removeSource = function (id) {
        var sourceIndex = this._user.sources.findIndex(function (source) { return source.id == id; });
        this._user.sources.splice(sourceIndex, 1);
    };
    ProfilePage.prototype.editSourceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sourcesModal, modalReponse, selectedArticles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: sources_modal_page_1.SourcesModalPage,
                            componentProps: { 'sources': this._user.sources }
                        })];
                    case 1:
                        sourcesModal = _a.sent();
                        sourcesModal.present();
                        return [4 /*yield*/, sourcesModal.onDidDismiss()];
                    case 2:
                        modalReponse = _a.sent();
                        selectedArticles = modalReponse.data;
                        this._user.sources = selectedArticles;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registeredUser, ex_1, toast, ex_2, toast, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 6]);
                        this._validatePassword();
                        this._user.login.password = this._newPassword;
                        return [3 /*break*/, 6];
                    case 1:
                        ex_1 = _a.sent();
                        toast = void 0;
                        if (!(ex_1 instanceof invalid_password_excpetion_1.InvalidPasswordExcpetion)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._toastCtrl.create({
                                message: ex_1.message,
                                duration: 3600,
                                position: 'top'
                            })];
                    case 2:
                        toast = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this._toastCtrl.create({
                            message: 'unknow error',
                            duration: 3600,
                            position: 'top'
                        })];
                    case 4:
                        toast = _a.sent();
                        _a.label = 5;
                    case 5:
                        toast.present();
                        return [2 /*return*/];
                    case 6:
                        _a.trys.push([6, 8, , 13]);
                        return [4 /*yield*/, this._userService.register(this._user)];
                    case 7:
                        registeredUser = _a.sent();
                        return [3 /*break*/, 13];
                    case 8:
                        ex_2 = _a.sent();
                        toast = void 0;
                        if (!(ex_2 instanceof register_excpetion_1.RegisterException)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this._toastCtrl.create({
                                message: ex_2.message,
                                duration: 3600,
                                position: 'top'
                            })];
                    case 9:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, this._toastCtrl.create({
                            message: 'unknow error',
                            duration: 3600,
                            position: 'top'
                        })];
                    case 11:
                        toast = _a.sent();
                        _a.label = 12;
                    case 12:
                        console.error(ex_2);
                        toast.present();
                        return [2 /*return*/];
                    case 13:
                        this._session.user = registeredUser;
                        return [4 /*yield*/, this._alertCtrl.create({
                                header: 'Seccess',
                                message: 'Your account has been created, you can see the news right now',
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            _this._navCtrl.navigateForward('report');
                                        }
                                    }]
                            })];
                    case 14:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentPassword, ex_3, toast, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentPassword = this._user.login.password;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 8]);
                        return [4 /*yield*/, this._validatePassword(currentPassword)];
                    case 2:
                        _a.sent();
                        if (this.newPassword) {
                            this._user.login.password = this.newPassword;
                        }
                        return [3 /*break*/, 8];
                    case 3:
                        ex_3 = _a.sent();
                        toast = void 0;
                        if (!(ex_3 instanceof invalid_password_excpetion_1.InvalidPasswordExcpetion)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._toastCtrl.create({
                                message: ex_3.message,
                                duration: 3600,
                                position: 'top'
                            })];
                    case 4:
                        toast = _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this._toastCtrl.create({
                            message: 'unknow error',
                            duration: 3600,
                            position: 'top'
                        })];
                    case 6:
                        toast = _a.sent();
                        _a.label = 7;
                    case 7:
                        toast.present();
                        return [2 /*return*/];
                    case 8: return [4 /*yield*/, this._userService.update(this._user)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this._alertCtrl.create({
                                header: 'Seccess',
                                message: 'Your account has been updated, you can see the news right now',
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            _this._navCtrl.navigateForward('report');
                                        }
                                    }]
                            })];
                    case 10:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype._validatePassword = function (currentPassword) {
        if (currentPassword === void 0) { currentPassword = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //NADA FOI MODIFICADO, NÃO PRECISA DE VALIDAÇÃO
                if (!this._currentPassword && !this._newPassword && !this._passwordConfirmation) {
                    return [2 /*return*/];
                }
                //XOR OU A SENHA NOVA NÃO FOI INFORMADA
                //OU A CONFIRMAÇÃO DA SENHA NÃO FOI INFORMADA
                //SE NENHUM DOS DOIS INFORMADO, NÃO HÁ ATUALIZAÇÃO, NÃO HÁ ERRO
                if ((this._newPassword && !this._passwordConfirmation)
                    || (!this._newPassword && this._passwordConfirmation)) {
                    throw new invalid_password_excpetion_1.InvalidPasswordExcpetion("The new password and the confirmation are both required");
                }
                //CASO SEJA NÃO SEJA UM REGISTRO NOVO, 
                //A SENHA DEVE ATUAL DEVE SER A MESMA OBITDA DA BASE DE DADOS
                if (!this._isNew) {
                    //EXISTE ATUALIZAÇÃO DE SENHA, MAS NÃO FOI INFORMADA A SENHA ATUAL
                    if ((this._newPassword || this._passwordConfirmation) && !this._currentPassword) {
                        throw new invalid_password_excpetion_1.InvalidPasswordExcpetion("Is required inform the previous password");
                    }
                    if (currentPassword != this._currentPassword) {
                        throw new invalid_password_excpetion_1.InvalidPasswordExcpetion("The previous password informated is incorrect");
                    }
                }
                //A SENHA DEVE SER IGUAL A SUA VALIDAÇÃO
                if (this._newPassword != this._passwordConfirmation) {
                    throw new invalid_password_excpetion_1.InvalidPasswordExcpetion("The new password informed is not equal to confirmation");
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this._setUserLogged();
    };
    ProfilePage.prototype.ngOnInit = function () {
        this._setUserLogged();
    };
    ProfilePage.prototype._setUserLogged = function () {
        if (this._session.isLogged) {
            this._user = this._session.user;
            this._isNew = false;
        }
        else {
            this._user = new user_1.User();
            this._isNew = true;
        }
    };
    ProfilePage = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        __param(0, core_1.Inject("article")),
        __param(1, core_1.Inject("user")),
        __metadata("design:paramtypes", [Object, Object, session_1.Session,
            angular_1.ModalController,
            angular_1.AlertController,
            angular_1.NavController,
            angular_1.ToastController])
    ], ProfilePage);
    return ProfilePage;
}());
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=profile.page.js.map