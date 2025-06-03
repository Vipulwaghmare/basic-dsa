import { describe, expect, test } from '@jest/globals';
import { MinHeap } from '../../src/data-structures';

describe('MinHeap', () => {
  let minHeap: MinHeap;

  beforeEach(() => {
    minHeap = new MinHeap();
  });

  test('push & peek', () => {
    minHeap.push(10);
    expect(minHeap.toArray()).toEqual([10])
    expect(minHeap.peek()).toBe(10);
    minHeap.push(9);
    expect(minHeap.toArray()).toEqual([9, 10])
    expect(minHeap.peek()).toBe(9);
    minHeap.push(8);
    expect(minHeap.toArray()).toEqual([8, 10, 9])
    expect(minHeap.peek()).toBe(8);
    minHeap.push(7);
    expect(minHeap.toArray()).toEqual([7, 8, 9, 10])
    expect(minHeap.peek()).toBe(7);
    minHeap.push(11);
    expect(minHeap.toArray()).toEqual([7, 8, 9, 10, 11])
    expect(minHeap.peek()).toBe(7);
    minHeap.push(6);
    expect(minHeap.toArray()).toEqual([6, 8, 7, 10, 11, 9])
    expect(minHeap.peek()).toBe(6);
  });

  test('pop', () => {
    minHeap.push(1);
    minHeap.push(2);
    minHeap.push(3);
    minHeap.push(4);
    minHeap.push(5);
    minHeap.push(6);
    minHeap.push(7);
    minHeap.push(8);

    expect(minHeap.pop()).toBe(1);
    console.log('xxx', minHeap.toArray())
    expect(minHeap.toArray()).toEqual([2, 4, 3, 8, 5, 6, 7]);

    expect(minHeap.pop()).toBe(2);
    expect(minHeap.toArray()).toEqual([3, 4, 6, 8, 5, 7]);

    expect(minHeap.pop()).toBe(3);
    expect(minHeap.toArray()).toEqual([4, 5, 6, 8, 7]);

    expect(minHeap.pop()).toBe(4);
    expect(minHeap.toArray()).toEqual([5, 7, 6, 8]);

    expect(minHeap.pop()).toBe(5);
    expect(minHeap.toArray()).toEqual([6, 7, 8]);

    expect(minHeap.pop()).toBe(6);
    expect(minHeap.toArray()).toEqual([7, 8]);

    expect(minHeap.pop()).toBe(7);
    expect(minHeap.toArray()).toEqual([8]);

    expect(minHeap.pop()).toBe(8);
    expect(minHeap.toArray()).toEqual([]);
  });

});