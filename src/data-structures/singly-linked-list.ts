class SLLNode<T> {
  value: T;
  next: SLLNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  private length: number;
  private head: SLLNode<T> | null;
  private tail: SLLNode<T> | null;
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
    return this.length === 0
  }

  /**
   * Adds an element to the end of the list.
   * @param value The element to add to the list.
   * @returns The value that was added to the list.
   */
  push(value: T) {
    const node = new SLLNode(value);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return value;
  }

  /**
   * Removes an element from the end of the list and returns it.
   * @returns The element that was removed from the list. If the list is empty, undefined is returned.
   */
  pop() {
    if (!this.tail || !this.head) return undefined;
    if (this.length === 1) {
      const item = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return item.value;
    }
    let current = this.head.next;
    let prev = this.head;
    while (current && current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    return current?.value;
  }

  /**
   * Adds an element to the beginning of the list.
   * @param value The element to add to the list.
   * @returns The value that was added to the list.
   */
  unshift(value: T) {
    const node = new SLLNode(value);
    if (!this.head) {
      this.push(value);
    } else {
      const prevHead = this.head;
      this.head = node;
      this.head.next = prevHead;
      this.length++;
    }
    return value;
  }

  /**
   * Removes the first element from the list and returns it.
   * If the list has only one element or is empty, it uses the pop method to handle the removal.
   * @returns The value of the removed element, or undefined if the list was empty.
   */
  shift() {
    if (this.length <= 1 || !this.head || !this.tail) {
      return this.pop();
    }
    const prevHead = this.head;
    this.head = prevHead.next;
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
    if (this.length <= index || !this.head || !this.tail) return undefined;
    let current: SLLNode<T> | null = this.head;
    let currentIndex = 0;
    while (current && currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }
    return onlyValue ? current?.value : current;
  }

  /**
   * Updates the value of the node at the specified index.
   * @param index The index of the node to update.
   * @param value The new value to set.
   * @returns Undefined if the index is out of bounds.
   */

  set(index: number, value: T) {
    if (index >= this.length) return undefined;
    const node = new SLLNode(value);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
      const item = this.get(index, false) as SLLNode<T> | null;
      if (item) item.value = value;
    }
    return value;
  }

  /**
   * Inserts an element at the specified index in the list.
   * @param index The index at which to insert the new element.
   * @param value The element to insert into the list.
   * @returns Undefined if the index is out of bounds.
   */

  insert(index: number, value: T) {
    if (index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index == - this.length) return this.push(value)
    const node = new SLLNode(value);
    const prevNode = this.get(index - 1, false) as SLLNode<T> | null;
    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
    }
    return value;
  }

  /**
   * Clears the list, setting the head, tail, and length back to initial state.
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
      result.push(current.value);
      current = current.next
    }
    return result;
  }

  /**
   * Removes an element from the list at the specified index and returns it.
   * If the index is 0, uses the shift method to handle the removal.
   * If the index is equal to the list's length, uses the pop method to handle the removal.
   * If the list has only one element or is empty, clears the list.
   * @param index The index of the element to remove.
   * @returns The value of the removed element, or undefined if the index is out of bounds.
   */
  remove(index: number) {
    if (index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (this.length === 1) return this.clear();
    const prevNode = this.get(index - 1, false) as SLLNode<T> | undefined;
    const currentNode = prevNode?.next;
    if (prevNode && currentNode) {
      prevNode.next = currentNode.next;
      currentNode.next = null;
      return currentNode.value;
    }
  }

  /**
   * Reverses the list in place.
   * @returns True if the list was reversed, undefined if the list was empty.
   */
  reverse() {
    if (this.length === 0) return undefined;
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    return true;
  }

  print() {
    const arr = this.toArray();
    console.log('----- printing start -----')
    arr.forEach((item, index) => {
      console.log(`[${index}] =>`, item)
    })
    console.log('----- printing end -----')
  }

  /**
   * Returns a deep copy of the singly linked list.
   * @returns A new SinglyLinkedList containing the same elements as this list.
   */
  copy() {
    const sll: SinglyLinkedList<T> = new SinglyLinkedList();
    let current = this.head;
    while (current) {
      sll.push(current.value);
      current = current.next;
    }
    return sll;
  }
}
