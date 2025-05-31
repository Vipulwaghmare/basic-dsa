export class Stack<T> {
  private stack: Array<T>
  constructor() {
    this.stack = [];
  }

  /**
   * Adds an item to the top of the stack.
   * @param item - The item to be added to the stack.
   * @returns The updated stack.
   */

  push(item: T) {
    this.stack.push(item);
    return this.stack;
  }

  /**
   * Removes an item from the top of the stack and returns it.
   * @returns The item that was removed from the stack. If the stack is empty, undefined is returned.
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Returns the item at the top of the stack without removing it.
   * @returns The item at the top of the stack. If the stack is empty, undefined is returned.
   */

  peek() {
    if (this.isEmpty()) return undefined;
    return this.stack[this.size - 1];
  }

  /**
   * Checks if the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Returns the number of items in the stack.
   * @returns The number of items in the stack.
   */

  get size() {
    return this.stack.length;
  }
}