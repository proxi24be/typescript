import { Observable, Observer } from "./observator";

class News extends Observable {
    addNews = function (data: any, observer: Observer = undefined) {
        this.notifyObservers(data, "addNews", observer);
    }
}

class Subscriber implements Observer {
    update = function(observable: any, data: any, event: string) {
        switch(event) {
            case "news.addNews": 
            break;

            default: break;
        }
    }
}

let news = new News("news");
let subscriber1 = new Subscriber();
let subscriber2 = new Subscriber();

news.addObserver(subscriber1);
news.addObserver(subscriber2);

describe("Observator spec", function () {
    it("contains spec with an expectation", function () {
        expect(news instanceof Observable).toBe(true);
    });


});