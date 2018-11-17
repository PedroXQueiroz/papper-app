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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var CheckedSource = /** @class */ (function () {
    function CheckedSource() {
    }
    return CheckedSource;
}());
var SourcesModalPage = /** @class */ (function () {
    function SourcesModalPage(_params, _articleSource, _modalCtrl) {
        var _this = this;
        this._params = _params;
        this._articleSource = _articleSource;
        this._modalCtrl = _modalCtrl;
        var userSources = this._params.get('sources');
        this._checkedSources = new Array();
        this._articleSource.getSources()
            .then(function (sources) {
            var _loop_1 = function (currentSource) {
                var currentCheckedSource = new CheckedSource();
                var userContainsSource = userSources.findIndex(function (userSrc) { return userSrc.id == currentSource.id; }) != -1;
                currentCheckedSource.checked = userContainsSource;
                currentCheckedSource.source = currentSource;
                _this._checkedSources.push(currentCheckedSource);
            };
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var currentSource = sources_1[_i];
                _loop_1(currentSource);
            }
        });
    }
    Object.defineProperty(SourcesModalPage.prototype, "checkedSource", {
        get: function () {
            return this._checkedSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourcesModalPage.prototype, "selectedSources", {
        get: function () {
            var selecteds = this.checkedSource.filter(function (srcCheck) { return srcCheck.checked; });
            return selecteds.map(function (srcCheck) { return srcCheck.source; });
        },
        enumerable: true,
        configurable: true
    });
    SourcesModalPage.prototype.toggleSourceCheck = function (sourceId) {
        var sourceIndex = this._checkedSources.findIndex(function (src) { return src.source.id == sourceId; });
        var currentCheckValue = this._checkedSources[sourceIndex].checked;
        this._checkedSources[sourceIndex].checked = !currentCheckValue;
    };
    SourcesModalPage.prototype.finish = function () {
        this._modalCtrl.dismiss(this.selectedSources);
    };
    SourcesModalPage.prototype.ngOnInit = function () {
    };
    SourcesModalPage = __decorate([
        core_1.Component({
            selector: 'app-sources-modal',
            templateUrl: './sources-modal.page.html',
            styleUrls: ['./sources-modal.page.scss'],
        }),
        __param(1, core_1.Inject("article")),
        __metadata("design:paramtypes", [angular_1.NavParams, Object, angular_1.ModalController])
    ], SourcesModalPage);
    return SourcesModalPage;
}());
exports.SourcesModalPage = SourcesModalPage;
//# sourceMappingURL=sources-modal.page.js.map