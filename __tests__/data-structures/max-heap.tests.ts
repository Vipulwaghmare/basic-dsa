import { describe, expect, test } from '@jest/globals';
import { MaxHeap } from '../../src/data-structures';

describe('MaxHeap', () => {
  let maxHeap: MaxHeap;

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  test('push & peek', () => {
    maxHeap.push(10);
    expect(maxHeap.toArray()).toEqual([10])
    expect(maxHeap.peek()).toBe(10);
    maxHeap.push(9);
    expect(maxHeap.toArray()).toEqual([10, 9])
    expect(maxHeap.peek()).toBe(10);
    maxHeap.push(8);
    expect(maxHeap.toArray()).toEqual([10, 9, 8])
    expect(maxHeap.peek()).toBe(10);
    maxHeap.push(7);
    expect(maxHeap.toArray()).toEqual([10, 9, 8, 7])
    expect(maxHeap.peek()).toBe(10);
    maxHeap.push(11);
    expect(maxHeap.toArray()).toEqual([11, 10, 8, 7, 9])
    expect(maxHeap.peek()).toBe(11);
    maxHeap.push(6);
    expect(maxHeap.toArray()).toEqual([11, 10, 8, 7, 9, 6])
    expect(maxHeap.peek()).toBe(11);
    maxHeap.push(20);
    expect(maxHeap.toArray()).toEqual([20, 10, 11, 7, 9, 6, 8])
    expect(maxHeap.peek()).toBe(20);
  });

  test('pop', () => {
    maxHeap.push(1);
    maxHeap.push(2);
    maxHeap.push(3);
    maxHeap.push(4);
    maxHeap.push(5);
    maxHeap.push(6);
    maxHeap.push(7);
    maxHeap.push(8);
    expect(maxHeap.toArray()).toEqual([8, 7, 6, 4, 3, 2, 5, 1])

    expect(maxHeap.pop()).toBe(8);
    expect(maxHeap.toArray()).toEqual([7, 4, 6, 1, 3, 2, 5]);

    expect(maxHeap.pop()).toBe(7);
    expect(maxHeap.toArray()).toEqual([6, 4, 5, 1, 3, 2]);

    expect(maxHeap.pop()).toBe(6);
    expect(maxHeap.toArray()).toEqual([5, 4, 2, 1, 3]);

    expect(maxHeap.pop()).toBe(5);
    expect(maxHeap.toArray()).toEqual([4, 3, 2, 1]);

    expect(maxHeap.pop()).toBe(4);
    expect(maxHeap.toArray()).toEqual([3, 1, 2]);

    expect(maxHeap.pop()).toBe(3);
    expect(maxHeap.toArray()).toEqual([2, 1]);

    expect(maxHeap.pop()).toBe(2);
    expect(maxHeap.toArray()).toEqual([1]);

    expect(maxHeap.pop()).toBe(1);
    expect(maxHeap.toArray()).toEqual([]);
  });

});
