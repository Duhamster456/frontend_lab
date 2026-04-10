interface SortStrategy {
	sort(data: number[]): number[];
}

class BubbleSort implements SortStrategy {
	sort(data: number[]): number[] {
		const arr = [...data];
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
		return arr;
	}
}

class QuickSort implements SortStrategy {
	sort(data: number[]): number[] {
		if (data.length <= 1) return data;
		const pivot = data[0];
		const left = data.slice(1).filter(x => x <= pivot);
		const right = data.slice(1).filter(x => x > pivot);
		return [...new QuickSort().sort(left), pivot, ...new QuickSort().sort(right)];
	}
}

class Sorter {
	private strategy: SortStrategy;
	
	constructor(strategy: SortStrategy) {
		this.strategy = strategy;
	}
	
	setStrategy(strategy: SortStrategy): void {
		this.strategy = strategy;
	}
	
	execute(data: number[]): number[] {
		return this.strategy.sort(data);
	}
}

const sorter = new Sorter(new BubbleSort());
console.log(sorter.execute([5, 2, 8, 1]));
sorter.setStrategy(new QuickSort());
console.log(sorter.execute([5, 2, 8, 1]));