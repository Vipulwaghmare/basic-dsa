import { describe, expect, test } from '@jest/globals';
import { Queue } from '../../src/data-structures';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('enqueue - add to queue', () => {
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.peek()).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.peek()).toBe(1);
    expect(queue.enqueue(3)).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  test('size check', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
    queue.dequeue();
    expect(queue.size).toBe(2);
    queue.dequeue();
    expect(queue.size).toBe(1);
    queue.dequeue();
    expect(queue.size).toBe(0);
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  test('empty check', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('deque returns', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size).toBe(1);
    expect(queue.dequeue()).toBe(3);
    expect(queue.size).toBe(0);
  });

  test('final test', () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(3);
    // Remove
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(1);
    expect(queue.peek()).toBe(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.size).toBe(0);
    expect(queue.peek()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);
  });
});