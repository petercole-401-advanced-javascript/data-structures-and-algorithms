'use strict';

class Node {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class Stack {
	constructor() {
		this.top = top;
		this.stack = [];
	}
	push() {

	}
	pop() {

	}
}

class Queue {
	constructor() {
		this.front = front;
		this.queue = [];
	}
	enqueue() {

	}
	dequeue() {

	}
}

const preOrderTraverse = (root) => {
	const stack = new Stack();
	let current = root;
	if (current === null) {
		return;
	}
	console.log(current.value);
	if (current.left !== null){
		stack.push(current);
		traverse(current.left);
	}
	if (current.right !== null){
		stack.push(current);
		traverse(current.right);
	}
	preOrderTraverse(stack.pop());
}

// get me everything at depth 1, then at depth 2, 3, ... (not recursive, yes iterative)

const breadthFirstTraverse = (root) => {
	const queue = new Queue();
	queue.enqueue(root);
	while (queue.peek()) {
		let current = queue.dequeue();
		console.log(current);
		if (current.left !== null) queue.enqueue(current.left);
		if (current.right !== null) queue.enqueue(current.right);
	}
}
