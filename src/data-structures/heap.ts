class Heap {
  protected heap: number[] = [];
  constructor() {
    this.heap = []
  }

  protected swap(i: number, j: number) {
    let temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }

  protected getParentIndex(i: number) {
    return Math.floor((i - 1) / 2) // IF IT was starting with 1, it would be simle
  }

  protected getLeftChildIndex(i: number) {
    return (i * 2) + 1
  }

  protected getRightChildIndex(i: number) {
    return (i * 2) + 2
  }

  /**
   * The number of elements in the heap.
   * @returns The number of elements in the heap.
   */
  get size() {
    return this.heap.length;
  }

  /**
   * Checks if the heap is empty.
   * @returns True if the heap is empty, false otherwise.
   */
  isEmpty() {
    return this.heap.length === 0
  }

  /**
   * Returns the element at the top of the heap without removing it.
   * @returns The element at the top of the heap. If the heap is empty, undefined is returned.
   */
  peek() {
    return this.heap[0]
  }

  /**
   * Returns an array containing the elements of the heap.
   * @returns An array of the elements in the heap, in order.
   */
  toArray() {
    return [...this.heap]
  }
}

export class MinHeap extends Heap {
  constructor() {
    super();
  }
  private bubbleUp(i: number) {
    const current = this.heap[i]
    while (i > 0) {
      const parentIndex = this.getParentIndex(i);
      const parent = this.heap[parentIndex];
      if (parent > current) {
        this.swap(parentIndex, i)
      } else {
        break;
      }
      i = parentIndex;
    }
  }

  private bubbleDown(i: number) {
    const leftIndex = this.getLeftChildIndex(i);
    const rightIndex = this.getRightChildIndex(i);
    const leftItem = this.heap[leftIndex]
    const rightItem = this.heap[rightIndex]
    const current = this.heap[i]
    let swapIndex = i;
    if (leftIndex < this.size && leftItem < current) {
      swapIndex = leftIndex
    }
    if (rightIndex < this.size && rightItem < this.heap[swapIndex]) {
      swapIndex = rightIndex
    }
    if (swapIndex === i) {
      return;
    }
    this.swap(swapIndex, i)
    this.bubbleDown(swapIndex);
  }

  /**
   * Adds a number to the heap and ensures the heap property is maintained.
   * @param num The number to add to the heap.
   * @returns The number that was added to the heap.
   */

  push(num: number) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
    return num;
  }

  /**
   * Removes the smallest element from the heap and returns it.
   * If the heap is empty, returns undefined.
   * @returns The element that was removed from the heap.
   */

  pop() {
    if (this.size === 0) return undefined;
    const item = this.peek();
    const endItem = this.heap.pop()!;
    // If we just removed the last element, we’re done
    if (this.heap.length > 0) {
      this.heap[0] = endItem;
      this.bubbleDown(0);
    }

    return item;
  }

  static heapify(arr: number[]) {
    const heap = new MinHeap();
    for (const num of arr) {
      heap.push(num)
    }
    return heap.toArray()
  }


}

export class MaxHeap extends Heap {
  constructor() {
    super();
  }
  private bubbleUp(i: number) {
    const current = this.heap[i]
    while (i > 0) {
      const parentIndex = this.getParentIndex(i);
      const parent = this.heap[parentIndex];
      if (parent < current) { // only diff
        this.swap(parentIndex, i)
      } else {
        break;
      }
      i = parentIndex;
    }
  }

  private bubbleDown(i: number) {
    const leftIndex = this.getLeftChildIndex(i);
    const rightIndex = this.getRightChildIndex(i);
    const leftItem = this.heap[leftIndex]
    const rightItem = this.heap[rightIndex]
    const current = this.heap[i]
    let swapIndex = i;
    if (leftIndex < this.size && leftItem > current) { // diff
      swapIndex = leftIndex
    }
    if (rightIndex < this.size && rightItem > this.heap[swapIndex]) { // diff
      swapIndex = rightIndex
    }
    if (swapIndex === i) {
      return;
    }
    this.swap(swapIndex, i)
    this.bubbleDown(swapIndex);
  }

  /**
   * Adds a number to the heap and ensures the heap property is maintained.
   * @param num The number to add to the heap.
   * @returns The number that was added to the heap.
   */

  push(num: number) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
    return num;
  }

  /**
   * Removes an element from the top of the heap and returns it.
   * @returns The element that was removed from the heap. If the heap is empty, undefined is returned.
   */
  pop() {
    if (this.size === 0) return undefined;
    const item = this.peek();
    const endItem = this.heap.pop()!;
    // If we just removed the last element, we’re done
    if (this.heap.length > 0) {
      this.heap[0] = endItem;
      this.bubbleDown(0);
    }

    return item;
  }

  static heapify(arr: number[]) {
    const heap = new MaxHeap();
    for (const num of arr) {
      heap.push(num)
    }
    return heap.toArray()
  }
}