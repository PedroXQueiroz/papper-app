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
var core_1 = require("@angular/core");
var article_1 = require("../../models/article");
var http_1 = require("@angular/common/http");
var article_source_1 = require("../../models/article-source");
var ArticleServiceNewsApi = /** @class */ (function () {
    function ArticleServiceNewsApi(_httpClient) {
        this._httpClient = _httpClient;
        this._config = this.getConfig();
    }
    ArticleServiceNewsApi.prototype.getConfig = function () {
        var config = new NewsApiConfig;
        config.apiToken = "0038476deec4450e8ae2597cc1b30411";
        config.newsApiRoute = "https://newsapi.org/v2/";
        return config;
    };
    ArticleServiceNewsApi.prototype.list = function (reportFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var listAllRoute, params, getArticlesResponse, articles, _i, _a, article;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        listAllRoute = this._config.newsApiRoute + "everything";
                        params = new http_1.HttpParams().set('apiKey', this._config.apiToken);
                        if (reportFilters.sources) {
                            reportFilters.sources.forEach(function (source) { params = params.set('sources', source.id); });
                        }
                        return [4 /*yield*/, this._httpClient.get(listAllRoute, { params: params }).toPromise()];
                    case 1:
                        getArticlesResponse = _b.sent();
                        articles = [];
                        for (_i = 0, _a = getArticlesResponse.articles; _i < _a.length; _i++) {
                            article = _a[_i];
                            articles.push(new article_1.Article(article));
                        }
                        return [2 /*return*/, articles];
                }
            });
        });
    };
    ArticleServiceNewsApi.prototype.getSources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, sourcesResponse, sources, _i, _a, source;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = new http_1.HttpParams().set('apiKey', this._config.apiToken);
                        return [4 /*yield*/, this._httpClient.get(this._config.newsApiRoute + "sources", { params: params }).toPromise()];
                    case 1:
                        sourcesResponse = _b.sent();
                        sources = [];
                        for (_i = 0, _a = sourcesResponse.sources; _i < _a.length; _i++) {
                            source = _a[_i];
                            sources.push(new article_source_1.ArticleSource(source));
                        }
                        return [2 /*return*/, sources];
                }
            });
        });
    };
    ArticleServiceNewsApi = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ArticleServiceNewsApi);
    return ArticleServiceNewsApi;
}());
exports.ArticleServiceNewsApi = ArticleServiceNewsApi;
var NewsApiConfig = /** @class */ (function () {
    function NewsApiConfig() {
    }
    Object.defineProperty(NewsApiConfig.prototype, "apiToken", {
        get: function () {
            return this._apiToken;
        },
        set: function (apiToken) {
            this._apiToken = apiToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsApiConfig.prototype, "newsApiRoute", {
        get: function () {
            return this._newsApiRoute;
        },
        set: function (route) {
            this._newsApiRoute = route;
        },
        enumerable: true,
        configurable: true
    });
    return NewsApiConfig;
}());
//# sourceMappingURL=article-service-news-api.js.map