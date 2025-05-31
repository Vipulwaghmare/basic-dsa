export class Queue<T> {
  private queue: Array<T>
  constructor() {
    this.queue = [];
  }

  enqueue(item: T) {
    this.queue.push(item);
    return this.queue;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.queue.shift();
    return item;
  }

  get size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue[0];
  }
}
