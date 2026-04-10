class TreeNode<T> {
	value: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree<T> {
	private root: TreeNode<T> | null;
	private compare: (a: T, b: T) => number;

	constructor(compareFn: (a: T, b: T) => number) {
		this.root = null;
		this.compare = compareFn;
	}

	insert(value: T): void {
		const newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		this.insertNode(this.root, newNode);
	}

	private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
		const cmp = this.compare(newNode.value, node.value);
		if (cmp < 0) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else if (cmp > 0) {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	search(value: T): boolean {
		return this.searchNode(this.root, value);
	}

	private searchNode(node: TreeNode<T> | null, value: T): boolean {
		if (node === null) {
			return false;
		}
		const cmp = this.compare(value, node.value);
		if (cmp === 0) {
			return true;
		}
		if (cmp < 0) {
			return this.searchNode(node.left, value);
		}
		return this.searchNode(node.right, value);
	}

	delete(value: T): void {
		this.root = this.deleteNode(this.root, value);
	}

	private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
		if (node === null) {
			return null;
		}
		const cmp = this.compare(value, node.value);
		if (cmp < 0) {
			node.left = this.deleteNode(node.left, value);
			return node;
		}
		if (cmp > 0) {
			node.right = this.deleteNode(node.right, value);
			return node;
		}
		if (node.left === null && node.right === null) {
			return null;
		}
		if (node.left === null) {
			return node.right;
		}
		if (node.right === null) {
			return node.left;
		}
		const minRight = this.findMinNode(node.right);
		node.value = minRight.value;
		node.right = this.deleteNode(node.right, minRight.value);
		return node;
	}

	private findMinNode(node: TreeNode<T>): TreeNode<T> {
		let current = node;
		while (current.left !== null) {
			current = current.left;
		}
		return current;
	}

	update(oldValue: T, newValue: T): boolean {
		if (this.search(oldValue)) {
			this.delete(oldValue);
			this.insert(newValue);
			return true;
		}
		return false;
	}

	height(): number {
		return this.calcHeight(this.root);
	}

	private calcHeight(node: TreeNode<T> | null): number {
		if (node === null) {
			return 0;
		}
		const leftHeight = this.calcHeight(node.left);
		const rightHeight = this.calcHeight(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
}