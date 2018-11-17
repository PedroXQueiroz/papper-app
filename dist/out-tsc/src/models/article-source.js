"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleSource = /** @class */ (function () {
    function ArticleSource(source) {
        if (source === void 0) { source = null; }
        if (!source) {
            return;
        }
        this._id = source.id || source._id;
        this._category = source.category || source._category;
        this._country = source.country || source._country;
        this._description = source.description || source._description;
        this._name = source.name || source._name;
    }
    Object.defineProperty(ArticleSource.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleSource.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleSource.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (desc) {
            this._description = this.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleSource.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (category) {
            this._category = category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleSource.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (country) {
            this._country = country;
        },
        enumerable: true,
        configurable: true
    });
    return ArticleSource;
}());
exports.ArticleSource = ArticleSource;
//# sourceMappingURL=article-source.js.map