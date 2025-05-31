export class Stack<T> {
  private stack: Array<T>
  constructor() {
    this.stack = [];
  }

  push(item: T) {
    this.stack.push(item);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.stack[this.size - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  get size() {
    return this.stack.length;
  }
}