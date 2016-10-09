(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Observable = (function () {
        function Observable(id) {
            this._id = id;
            this._observers = [];
        }
        Observable.prototype.addObserver = function (observer) {
            this._observers.push(observer);
        };
        Observable.prototype.notifyObservers = function (data, event, observer) {
            if (observer === undefined) {
                var id = this._id;
                for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                    var o = _a[_i];
                    this._update(o, data, event);
                }
            }
            else {
                var result = this._findObserver(observer);
                if (result !== undefined) {
                    this._update(result.observer, data, event);
                }
            }
        };
        Observable.prototype.removeObserver = function (observer) {
            var result = this._findObserver(observer);
            if (result !== undefined) {
                this._observers.splice(result.index, 1);
            }
        };
        Observable.prototype._update = function (observer, data, event) {
            observer.update(this, data, this._id + '.' + event);
        };
        Observable.prototype._findObserver = function (observer) {
            var found;
            for (var i = 0; i < this._observers.length; i++) {
                if (this._observers[i] === observer) {
                    found = { observer: this._observers[i], index: i };
                }
            }
            return found;
        };
        return Observable;
    }());
    exports.Observable = Observable;
});
