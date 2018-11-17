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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var menu_service_1 = require("../services/menu-service");
var session_1 = require("../session");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, _menuService, _session, _navController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._menuService = _menuService;
        this._session = _session;
        this._navController = _navController;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.sideMenu.side = "end";
            _this._menuService.setMenu(_this.sideMenu);
        });
    };
    AppComponent.prototype.editProfile = function () {
        this._navController.navigateForward('profile');
        this._menuService.toggle();
    };
    AppComponent.prototype.logout = function () {
        this._session.user = null;
        this._navController.navigateRoot('login');
        this._menuService.toggle();
    };
    __decorate([
        core_1.ViewChild("sideMenu"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sideMenu", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [angular_1.Platform,
            ngx_1.SplashScreen,
            ngx_2.StatusBar,
            menu_service_1.MenuService,
            session_1.Session,
            angular_1.NavController])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map