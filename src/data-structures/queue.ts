export class Queue<T> {
  private queue: Array<T>
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an item to the end of the queue.
   * @param item The item to add to the queue.
   * @returns The new queue.
   */
  enqueue(item: T) {
    this.queue.push(item);
    return item;
  }

  /**
   * Removes the item at the front of the queue and returns it.
   * @returns The item that was removed from the queue, or undefined if the queue is empty.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.queue.shift();
    return item;
  }

  /**
   * Retrieves the number of items in the queue.
   * @returns The size of the queue.
   */

  get size() {
    return this.queue.length;
  }

  /**
   * Checks if the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * Retrieves the item at the front of the queue without removing it.
   * @returns The item at the front of the queue, or undefined if the queue is empty.
   */
  peek() {
    return this.queue[0];
  }
}
