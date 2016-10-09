var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./observator"], factory);
    }
})(function (require, exports) {
    "use strict";
    var observator_1 = require("./observator");
    var News = (function (_super) {
        __extends(News, _super);
        function News() {
            _super.apply(this, arguments);
            this.addNews = function (data, observer) {
                if (observer === void 0) { observer = undefined; }
                this.notifyObservers(data, "addNews", observer);
            };
        }
        return News;
    }(observator_1.Observable));
    var Subscriber = (function () {
        function Subscriber() {
            this.update = function (observable, data, event) {
                switch (event) {
                    case "news.addNews":
                        break;
                    default: break;
                }
            };
        }
        return Subscriber;
    }());
    var news = new News("news");
    var subscriber1 = new Subscriber();
    var subscriber2 = new Subscriber();
    news.addObserver(subscriber1);
    news.addObserver(subscriber2);
    describe("Observator spec", function () {
        it("contains spec with an expectation", function () {
            expect(news instanceof observator_1.Observable).toBe(true);
        });
    });
});
