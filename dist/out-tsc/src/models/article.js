"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(article) {
        this._author = article.author;
        this._title = article.title;
        this._content = article.content;
        this._url = article.url;
        this._urlToImage = article.urlToImage;
        this._publishedAt = article.publishedAt;
    }
    Object.defineProperty(Article.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (source) {
            this._source = source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (author) {
            this._author = author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            this._url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "urlToImage", {
        get: function () {
            return this._urlToImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "publishedAt", {
        get: function () {
            return this._publishedAt;
        },
        set: function (publishedAt) {
            this._publishedAt = publishedAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map