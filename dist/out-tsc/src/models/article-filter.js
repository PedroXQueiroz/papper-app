"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleFilter = /** @class */ (function () {
    function ArticleFilter() {
        this._sources = [];
    }
    Object.defineProperty(ArticleFilter.prototype, "sources", {
        get: function () {
            return this._sources;
        },
        set: function (sources) {
            this._sources = sources;
        },
        enumerable: true,
        configurable: true
    });
    return ArticleFilter;
}());
exports.ArticleFilter = ArticleFilter;
//# sourceMappingURL=article-filter.js.map