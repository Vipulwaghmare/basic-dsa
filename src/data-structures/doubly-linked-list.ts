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

class DoublyLinkedList<T> {
  private length: number;
  private head: DLLNode<T> | null;
  private tail: DLLNode<T> | null;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push() { }
  pop() { }
  unshift() { }
  shift() { }
  get() { }
  set() { }
  insert() { }
  remove() { }
  printForward() { }
  printBackward() { }
  size() { }
  isEmpty() { }
  clear() { }
  toArray() { }
  reverse() { }
}
