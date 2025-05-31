import { describe, expect, test } from '@jest/globals';
import { Stack } from '../../src/data-structures';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('push and peek', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('pop returns last pushed item', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test('isEmpty works correctly', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(42);
    expect(stack.isEmpty()).toBe(false);
  });

  test('size reflects number of items', () => {
    expect(stack.size).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });
});