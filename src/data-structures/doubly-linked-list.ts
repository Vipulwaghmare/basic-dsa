class DLLNode<T> {
  value: T;
  prev: DLLNode<T> | null;
  next: DLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList<T> {
  private length: number;
  private head: DLLNode<T> | null;
  private tail: DLLNode<T> | null;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /**
   * Gets the number of elements in the list.
   * @returns The current size of the linked list.
   */
  get size() {
    return this.length;
  }

  /**
   * Checks if the list is empty.
   * @returns True if the list is empty, false otherwise.
   */

  isEmpty() {
    return this.length === 0;
  }
  /**
   * Clears the list by removing all elements.
   * Resets the head, tail, and length of the list to their initial states.
   */

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Returns an array containing the elements of the list.
   * @returns An array of the elements in the list, in order.
   */
  toArray() {
    let current = this.head;
    let result: T[] = [];
    while (current) {
      let next = current.next;
      result.push(current.value);
      current = next;
    }
    return result;
  }

  /**
   * Adds an element to the end of the list.
   * @param value The element to add to the list.
   * @returns The value that was added to the list.
   */
  push(value: T) {
    const node = new DLLNode(value);
    if (!this.head || !this.tail || this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return value;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return value;
  }

  /**
   * Removes an element from the end of the list and returns it.
   * @returns The element that was removed from the list. If the list is empty, undefined is returned.
   */
  pop() {
    let lastEle = this.tail;
    if (!lastEle || !this.head || this.length === 0) {
      return undefined;
    }
    let secondLast = lastEle.prev;
    if (this.length === 1 || !secondLast) {
      this.clear();
      return lastEle.value;
    }
    secondLast.next = null;
    this.tail = secondLast;
    this.length--;
    lastEle.prev = null;
    return lastEle.value;
  }

  /**
   * Adds an element to the beginning of the list.
   * @param value The element to add to the list.
   * @returns The value that was added to the list.
   */
  unshift(value: T) {
    if (!this.head || !this.tail || this.length === 0) {
      return this.push(value);
    }
    const node = new DLLNode(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return node.value;
  }

  /**
   * Removes the first element from the list and returns its value.
   * If the list has only one element or is empty, it handles the removal using the pop method.
   * @returns The value of the removed element, or undefined if the list was empty.
   */

  shift() {
    if (this.length <= 1 || !this.head) {
      return this.pop();
    }
    const prevHead = this.head;
    const newHead = prevHead.next;
    if (newHead) newHead.prev = null;
    this.head = newHead;
    prevHead.next = null;
    this.length--;
    return prevHead.value;
  }

  /**
   * Gets the element at the specified index from the list.
   * @param index The index of the element to retrieve.
   * @param onlyValue If true, only the value of the node is returned. If false, the entire node is returned.
   * @returns The value or node at the specified index, or undefined if the index is out of bounds.
   */
  get(index: number, onlyValue = true) {
    if (index >= this.length) return undefined;
    let currindex = 0;
    let currentNode = this.head;
    while (currindex <= index && currentNode) {
      if (index === currindex) {
        return onlyValue ? currentNode.value : currentNode;
      }
      currentNode = currentNode.next;
      currindex++;
    }
  }
  /**
   * Sets the value of the element at the specified index in the list.
   * If the index is out of bounds, the function returns undefined.
   * @param index The index of the element to set.
   * @param value The new value to set at the specified index.
   * @returns The value that was set, or undefined if the index is out of bounds.
   */

  set(index: number, value: T) {
    const node = this.get(index, false) as DLLNode<T> | undefined;
    if (!node) return undefined;
    node.value = value;
    return value;
  }
  /**
   * Inserts a new element at the specified index in the list.
   * If the index is 0, the function calls unshift.
   * If the index is equal to the list's length, the function calls push.
   * @param index The index at which to insert the new element.
   * @param value The value of the new element to insert.
   * @returns The value that was inserted, or undefined if the index is out of bounds.
   */
  insert(index: number, value: T) {
    if (index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const prevNode = this.get(index - 1, false) as DLLNode<T> | undefined;
    if (prevNode) {
      const newNode = new DLLNode(value);
      const nextNode = prevNode?.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return newNode.value;
    }
  }
  /**
   * Removes the element at the specified index from the list and returns it.
   * If the index is out of bounds, the function returns undefined.
   * If the index is 0, the function calls shift to remove the first element.
   * If the index is equal to the list's length - 1, the function calls pop to remove the last element.
   * If the list has only one element, the function clears the list.
   * @param index The index of the element to remove.
   * @returns The removed element, or undefined if the index is out of bounds.
   */

  remove(index: number) {
    if (index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (this.length === 1) return this.clear();
    const nodeAtIndex = this.get(index, false) as DLLNode<T> | undefined;
    const prev = nodeAtIndex?.prev;
    const next = nodeAtIndex?.next;
    if (nodeAtIndex && prev && next) {
      prev.next = next;
      next.prev = prev;
      nodeAtIndex.prev = null;
      nodeAtIndex.next = null;
      return nodeAtIndex.value;
    }
  }

  printForward() {
    const arr = this.toArray();
    console.log('----- printing start -----')
    arr.forEach((item, index) => {
      console.log(`[${index}] =>`, item)
    })
    console.log('----- printing end -----')
  }
  printBackward() {
    const arr = this.toArray().reverse();
    console.log('----- printing start -----')
    arr.forEach((item, index) => {
      console.log(`[${index}] =>`, item)
    })
    console.log('----- printing end -----')
  }
  reverse() {
    if (this.length === 0 || !this.head || !this.tail) return undefined;
    let current: DLLNode<T> | null = this.head;
    while (current) {
      let prev: DLLNode<T> | null = current.prev;
      let next: DLLNode<T> | null = current.next;
      current.prev = next;
      current.next = prev;
      current = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return true;
  }
}
