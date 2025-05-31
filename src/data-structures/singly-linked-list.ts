class SLLNode<T> {
  value: T;
  next: SLLNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private length: number;
  private head: SLLNode<T> | null;
  private tail: SLLNode<T> | null;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get size() {
    return this.length;
  }

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
  }

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

  // add to start
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
  }

  // remove from start
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

  get(index: number) {
    if (this.length <= index || !this.head || !this.tail) return undefined;
    let current: SLLNode<T> | null = this.head;
    let currentIndex = 0;
    while (current && currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }

  set(index: number, value: T) {
    if (index >= this.length) return undefined;
    const node = new SLLNode(value);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
      const item = this.get(index);
      if (item) item.value = value;
    }
  }

  insert(index: number, value: T) {
    if (index >= this.length) return undefined;
    if (index === 0) return this.unshift(value);
    const node = new SLLNode(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode?.next ?? null;
    if (prevNode) {
      prevNode.next = node;
      node.next = nextNode;
    }
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
      result.push(current.value);
      current = current.next
    }
    return result;
  }

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
}
