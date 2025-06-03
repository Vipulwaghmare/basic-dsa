import { describe, expect, test } from '@jest/globals';
import { DoublyLinkedList } from '../../src/data-structures';

describe('DoublyLinkedList', () => {
  let dll: DoublyLinkedList<number>;

  beforeEach(() => {
    dll = new DoublyLinkedList<number>();
  });

  test('size & isEmpty ', () => {
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
    expect(dll.push(1)).toBe(1);
    expect(dll.size).toBe(1);
    expect(dll.isEmpty()).toBe(false);
    expect(dll.push(2)).toBe(2);
    expect(dll.size).toBe(2);
    expect(dll.isEmpty()).toBe(false);
    expect(dll.toArray()).toEqual([1, 2])
    // POPPING
    expect(dll.pop()).toBe(2);
    expect(dll.size).toBe(1);
    expect(dll.isEmpty()).toBe(false);
    expect(dll.pop()).toBe(1);
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
    expect(dll.pop()).toBe(undefined);
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
  })

  test('push & pop & array check', () => {
    expect(dll.toArray()).toEqual([])
    dll.push(1);
    expect(dll.toArray()).toEqual([1])
    dll.push(2);
    expect(dll.toArray()).toEqual([1, 2])
    dll.push(3);
    expect(dll.toArray()).toEqual([1, 2, 3])
    dll.push(4);
    expect(dll.toArray()).toEqual([1, 2, 3, 4])
    dll.pop();
    expect(dll.toArray()).toEqual([1, 2, 3])
    dll.pop();
    expect(dll.toArray()).toEqual([1, 2])
    dll.pop();
    expect(dll.toArray()).toEqual([1])
    dll.pop();
    expect(dll.toArray()).toEqual([])
  })

  test('shift & unshift & array check', () => {
    expect(dll.shift()).toEqual(undefined)
    expect(dll.toArray()).toEqual([])
    dll.unshift(30);
    expect(dll.toArray()).toEqual([30])
    dll.unshift(20);
    expect(dll.toArray()).toEqual([20, 30])
    dll.unshift(10);
    expect(dll.toArray()).toEqual([10, 20, 30])
    // unshift
    expect(dll.toArray()).toEqual([10, 20, 30])
    expect(dll.unshift(9)).toEqual(9)
    expect(dll.toArray()).toEqual([9, 10, 20, 30])
    expect(dll.unshift(8)).toEqual(8)
    expect(dll.toArray()).toEqual([8, 9, 10, 20, 30])
    expect(dll.unshift(7)).toEqual(7)
    expect(dll.toArray()).toEqual([7, 8, 9, 10, 20, 30])
    // shift
    expect(dll.shift()).toEqual(7)
    expect(dll.toArray()).toEqual([8, 9, 10, 20, 30])
    expect(dll.shift()).toEqual(8)
    expect(dll.toArray()).toEqual([9, 10, 20, 30])
    expect(dll.shift()).toEqual(9)
    expect(dll.toArray()).toEqual([10, 20, 30])
  })

  test('get item', () => {
    expect(dll.get(0)).toBe(undefined)
    expect(dll.get(4)).toBe(undefined)
    dll.push(1);
    dll.push(2);
    dll.push(3)
    expect(dll.get(0)).toBe(1)
    expect(dll.get(1)).toBe(2)
    expect(dll.get(2)).toBe(3)
    expect(dll.get(3)).toBe(undefined)
    expect(dll.get(4)).toBe(undefined)
  })

  test('set item', () => {
    expect(dll.set(4, 0)).toBe(undefined)
    expect(dll.set(4, 4)).toBe(undefined)
    expect(dll.toArray()).toEqual([])
    dll.push(1);
    dll.push(2);
    dll.push(3)
    expect(dll.toArray()).toEqual([1, 2, 3])
    expect(dll.set(0, 10)).toBe(10)
    expect(dll.toArray()).toEqual([10, 2, 3])
    expect(dll.set(1, 20)).toBe(20)
    expect(dll.toArray()).toEqual([10, 20, 3])
    expect(dll.set(2, 30)).toBe(30)
    expect(dll.toArray()).toEqual([10, 20, 30])
    expect(dll.set(3, 40)).toBe(undefined)
    expect(dll.toArray()).toEqual([10, 20, 30])
    expect(dll.set(4, 50)).toBe(undefined)
    expect(dll.toArray()).toEqual([10, 20, 30])
  })

  test('insert item', () => {
    expect(dll.insert(4, 0)).toBe(undefined)
    expect(dll.insert(4, 4)).toBe(undefined)
    expect(dll.toArray()).toEqual([])
    dll.push(1);
    dll.push(2);
    dll.push(3)
    expect(dll.toArray()).toEqual([1, 2, 3])
    expect(dll.insert(0, 10)).toBe(10)
    expect(dll.toArray()).toEqual([10, 1, 2, 3])
    expect(dll.insert(1, 20)).toBe(20)
    expect(dll.toArray()).toEqual([10, 20, 1, 2, 3])
    expect(dll.insert(2, 30)).toBe(30)
    expect(dll.toArray()).toEqual([10, 20, 30, 1, 2, 3])
    expect(dll.insert(6, 90)).toBe(90)
    expect(dll.toArray()).toEqual([10, 20, 30, 1, 2, 3, 90])
    expect(dll.insert(8, 190)).toBe(undefined)
    expect(dll.toArray()).toEqual([10, 20, 30, 1, 2, 3, 90])
    dll.clear();
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
    expect(dll.toArray()).toEqual([])
  })

  test('remove item', () => {
    expect(dll.remove(4)).toBe(undefined)
    expect(dll.toArray()).toEqual([])
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    expect(dll.toArray()).toEqual([1, 2, 3, 4, 5])
    expect(dll.remove(0)).toBe(1)
    expect(dll.toArray()).toEqual([2, 3, 4, 5])
    expect(dll.remove(3)).toBe(5)
    expect(dll.toArray()).toEqual([2, 3, 4])
    expect(dll.remove(1)).toBe(3)
    expect(dll.toArray()).toEqual([2, 4])
    dll.clear();
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
    expect(dll.toArray()).toEqual([])
  })

  test('reverse & clear', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    expect(dll.toArray()).toEqual([1, 2, 3, 4, 5])
    dll.reverse();
    expect(dll.toArray()).toEqual([5, 4, 3, 2, 1])
    dll.reverse();
    expect(dll.toArray()).toEqual([1, 2, 3, 4, 5])
    dll.clear();
    expect(dll.size).toBe(0);
    expect(dll.isEmpty()).toBe(true);
    expect(dll.toArray()).toEqual([])
  })

  test('Copy', () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    expect(dll.toArray()).toEqual([1, 2, 3, 4, 5])
    const newdll = dll.copy();
    expect(newdll.toArray()).toEqual([1, 2, 3, 4, 5])
  })
});