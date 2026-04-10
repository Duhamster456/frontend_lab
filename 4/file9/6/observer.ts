interface Observer {
	update(data: unknown): void;
}

class Subject {
	private observers: Observer[] = [];
	
	attach(observer: Observer): void {
		this.observers.push(observer);
	}
	
	detach(observer: Observer): void {
		this.observers = this.observers.filter(obs => obs !== observer);
	}
	
	notify(data: unknown): void {
		for (const observer of this.observers) {
			observer.update(data);
		}
	}
}

class ConcreteObserver implements Observer {
	private name: string;
	
	constructor(name: string) {
		this.name = name;
	}
	
	update(data: unknown): void {
		console.log(`${this.name} received:`, data);
	}
}

const subject = new Subject();
const obs1 = new ConcreteObserver("Obs1");
const obs2 = new ConcreteObserver("Obs2");
subject.attach(obs1);
subject.attach(obs2);
subject.notify("Event happened");
subject.detach(obs1);
subject.notify("Second event");