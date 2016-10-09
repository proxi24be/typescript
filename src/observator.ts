export interface Observer {
    update(observable: any, data: any, event: string): void;
}

export class Observable {

    private _observers: Array<any>;
    private _id: string;

    constructor(id: string) {
        this._id = id;
        this._observers = [];
    }

    addObserver(observer: Observer) {
        this._observers.push(observer);
    }

    notifyObservers(data: any, event: string, observer: Observer) {
        if (observer === undefined) {
            var id = this._id;
            for (let o of this._observers) {
                this._update(o, data, event);
            }
        } else {
            var result = this._findObserver(observer);
            if (result !== undefined) {
                this._update(result.observer, data, event);
            }
        }
    }

    removeObserver(observer: Observer) {
        var result = this._findObserver(observer);
        if (result !== undefined) {
            this._observers.splice(result.index, 1);
        }
    }

    private _update(observer: Observer, data: any, event: string) {
        observer.update(this, data, this._id + '.' + event);
    }

    private _findObserver(observer: Observer) {
        let found: any;

        for(let i = 0; i < this._observers.length; i++) {
            if (this._observers[i] === observer) {
                found = {observer: this._observers[i], index: i};
            }
        }
        
        return found;
    }
}