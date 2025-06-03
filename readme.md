This repository contains various data structures and algorithms implemented in TypeScript.

## Data Structures

Data structures are the heart of any programming language. They are the key to storing, manipulating and retrieving data. This repository contains implementations of the following data structures:

- [Stack](src/data-structures/stack.ts)
  - `push(value: T)`: Adds a value to the top of the stack.
  - `pop()`: Removes and returns the value at the top of the stack.
  - `peek()`: Returns the value at the top of the stack without removing it.
  - `isEmpty()`: Returns whether the stack is empty or not.
  - `size`: Returns the number of elements in the stack.
- [Queue](src/data-structures/queue.ts)
  - `enqueue(value: T)`: Adds a value to the end of the queue.
  - `dequeue()`: Removes and returns the value at the front of the queue.
  - `peek()`: Returns the value at the front of the queue without removing it.
  - `isEmpty()`: Returns whether the queue is empty or not.
  - `size`: Returns the number of elements in the queue.
- [Singly Linked List](src/data-structures/singly-linked-list.ts)
  - `push(value: T)`: Adds a value to the end of the list.
  - `pop()`: Removes and returns the value at the end of the list.
  - `shift()`: Removes and returns the value at the beginning of the list.
  - `unshift(value: T)`: Adds a value to the beginning of the list.
  - `get(index: number)`: Returns the value at the specified index.
  - `set(index: number, value: T)`: Sets the value at the specified index.
  - `insert(index: number, value: T)`: Inserts a value at the specified index.
  - `remove(index: number)`: Removes the value at the specified index.
  - `reverse()`: Reverses the list in place.
  - `isEmpty()`: Returns whether the list is empty or not.
  - `size`: Returns the number of elements in the list.
  - `toArray()`: Returns an array of the elements in the list.
  - `copy()`: Returns the copy of the list.
- [Doubly Linked List](src/data-structures/doubly-linked-list.ts)
  - `push(value: T)`: Adds a value to the end of the list.
  - `pop()`: Removes and returns the value at the end of the list.
  - `shift()`: Removes and returns the value at the beginning of the list.
  - `unshift(value: T)`: Adds a value to the beginning of the list.
  - `get(index: number)`: Returns the value at the specified index.
  - `set(index: number, value: T)`: Sets the value at the specified index.
  - `insert(index: number, value: T)`: Inserts a value at the specified index.
  - `remove(index: number)`: Removes the value at the specified index.
  - `reverse()`: Reverses the list in place.
  - `isEmpty()`: Returns whether the list is empty or not.
  - `size`: Returns the number of elements in the list.
  - `toArray()`: Returns an array of the elements in the list.
  - `copy()`: Returns the copy of the list.
- [Heap](src/data-structures/heap.ts)
  - `push(value: T)`: Adds a value to the heap.
  - `pop()`: Removes and returns the value at the top of the heap.
  - `peek()`: Returns the value at the top of the heap without removing it.
  - `isEmpty()`: Returns whether the heap is empty or not.
  - `size`: Returns the number of elements in the heap.

## License

The repository is licensed under the ISC license. See the [LICENSE](LICENSE) file for more information.
