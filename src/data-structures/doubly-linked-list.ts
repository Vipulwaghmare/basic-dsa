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
  get size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

  push(value: T) {
    const node = new DLLNode(value);
    if (!this.head || !this.tail || this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  pop() {
    let lastEle = this.tail;
    if (!lastEle || !this.head || this.length === 0) {
      return undefined;
    }
    let secondLast = lastEle.prev;
    if (this.length === 1 || !secondLast) {
      this.clear();
      return lastEle;
    }
    secondLast.next = null;
    this.tail = secondLast;
    this.length--;
    lastEle.prev = null;
    return lastEle;
  }

  unshift(value: T) {
    let firstElement = this.head;
    if (!firstElement || !this.tail || this.length === 0) {
      return this.push(value);
    }
    const node = new DLLNode(value);
    this.head = node;
    node.next = firstElement;
    this.length++;
    return node;
  }

  shift() {
    if (this.length <= 1) {
      return this.pop();
    }
    const head = this.head;
    if (head) {
      const newHead = head?.next;
      this.head = newHead;
      head.next = null;
      this.length--;
      return head;
    }
  }
  get(index: number) {
    if (index >= this.length) return undefined;
    let currindex = 0;
    let currentNode = this.head;
    while (currindex <= index && currentNode) {
      if (index === currindex) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currindex++;
    }
  }
  set(index: number, value: T) {
    const node = this.get(index);
    if (!node) return undefined;
    node.value = value;
  }
  insert(index: number, value: T) {
    if (index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const prevNode = this.get(index - 1);
    if (prevNode) {
      const newNode = new DLLNode(value);
      const nextNode = prevNode?.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return newNode;
    }
  }
  remove(index: number) {
    if (index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (this.length === 1) return this.clear();
    const nodeAtIndex = this.get(index);
    const prev = nodeAtIndex?.prev;
    const next = nodeAtIndex?.next;
    if (nodeAtIndex && prev && next) {
      prev.next = next;
      next.prev = prev;
      nodeAtIndex.prev = null;
      nodeAtIndex.next = null;
      return nodeAtIndex;
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
    let prev = null;
    let current: DLLNode<T> | null = this.head;
    let next = current.next;
    while (current) {
      current.next = prev;
      current.prev = next;
      prev = current;
      next = current.prev;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    return true;
  }
}
