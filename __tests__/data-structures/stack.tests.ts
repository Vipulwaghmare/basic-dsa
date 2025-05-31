import { describe, expect, test } from '@jest/globals';
import { Stack } from '../../src/data-structures';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('push and peek', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('size check', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toBe(3);
  });

  test('empty check', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pop returns', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.size).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
  });

  test('check size', () => {
    expect(stack.size).toBe(0);
    stack.push(1);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });

  test('final test', () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(3);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(1);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
    expect(stack.peek()).toBe(undefined);
    expect(stack.isEmpty()).toBe(true);
  });
});