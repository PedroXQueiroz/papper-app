"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./login");
var article_source_1 = require("./article-source");
var User = /** @class */ (function () {
    function User(user) {
        if (user === void 0) { user = null; }
        if (!user) {
            this._login = new login_1.Login();
            this._sources = new Array();
            return;
        }
        this._login = new login_1.Login(user._login);
        this._sources = [];
        for (var _i = 0, _a = user._sources; _i < _a.length; _i++) {
            var currentSource = _a[_i];
            this._sources.push(new article_source_1.ArticleSource(currentSource));
        }
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (login) {
            this._login = login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sources", {
        get: function () {
            return this._sources;
        },
        set: function (sources) {
            this._sources = sources;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map