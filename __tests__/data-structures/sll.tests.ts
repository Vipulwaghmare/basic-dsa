import { describe, expect, test } from '@jest/globals';
import { SinglyLinkedList } from '../../src/data-structures';

describe('SinglyLinkedList', () => {
  let sll: SinglyLinkedList<number>;

  beforeEach(() => {
    sll = new SinglyLinkedList<number>();
  });

  test('size & isEmpty ', () => {
    expect(sll.size).toBe(0);
    expect(sll.isEmpty()).toBe(true);
    expect(sll.push(1)).toBe(1);
    expect(sll.size).toBe(1);
    expect(sll.isEmpty()).toBe(false);
    expect(sll.push(2)).toBe(2);
    expect(sll.size).toBe(2);
    expect(sll.isEmpty()).toBe(false);
    // POPPING
    expect(sll.pop()).toBe(2);
    expect(sll.size).toBe(1);
    expect(sll.isEmpty()).toBe(false);
    expect(sll.pop()).toBe(1);
    expect(sll.size).toBe(0);
    expect(sll.isEmpty()).toBe(true);
  })

  test('push & array check', () => {
    sll.push(1);
    expect(sll.toArray()).toEqual([1])
    sll.push(2);
    expect(sll.toArray()).toEqual([1, 2])
    sll.push(3);
    expect(sll.toArray()).toEqual([1, 2, 3])
    sll.push(4);
    expect(sll.toArray()).toEqual([1, 2, 3, 4])
  })

  test('pop & array check', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.toArray()).toEqual([1, 2, 3])
    expect(sll.pop()).toBe(3);
    expect(sll.toArray()).toEqual([1, 2])
    expect(sll.pop()).toBe(2);
    expect(sll.toArray()).toEqual([1])
    expect(sll.pop()).toBe(1);
    expect(sll.toArray()).toEqual([])
    expect(sll.pop()).toBe(undefined);
    expect(sll.toArray()).toEqual([])
  });

  test('shift & unshift & array check', () => {
    expect(sll.shift()).toEqual(undefined)
    expect(sll.toArray()).toEqual([])
    sll.unshift(30);
    expect(sll.toArray()).toEqual([30])
    sll.unshift(20);
    expect(sll.toArray()).toEqual([20, 30])
    sll.unshift(10);
    expect(sll.toArray()).toEqual([10, 20, 30])
    // unshift
    expect(sll.toArray()).toEqual([10, 20, 30])
    expect(sll.unshift(9)).toEqual(9)
    expect(sll.toArray()).toEqual([9, 10, 20, 30])
    expect(sll.unshift(8)).toEqual(8)
    expect(sll.toArray()).toEqual([8, 9, 10, 20, 30])
    expect(sll.unshift(7)).toEqual(7)
    expect(sll.toArray()).toEqual([7, 8, 9, 10, 20, 30])
    // shift
    expect(sll.shift()).toEqual(7)
    expect(sll.toArray()).toEqual([8, 9, 10, 20, 30])
    expect(sll.shift()).toEqual(8)
    expect(sll.toArray()).toEqual([9, 10, 20, 30])
    expect(sll.shift()).toEqual(9)
    expect(sll.toArray()).toEqual([10, 20, 30])

  })

  test('get item', () => {
    expect(sll.get(0)).toBe(undefined)
    expect(sll.get(4)).toBe(undefined)
    sll.push(1);
    sll.push(2);
    sll.push(3)
    expect(sll.get(0)).toBe(1)
    expect(sll.get(1)).toBe(2)
    expect(sll.get(2)).toBe(3)
    expect(sll.get(3)).toBe(undefined)
    expect(sll.get(4)).toBe(undefined)
  })

  test('set item', () => {
    expect(sll.set(4, 0)).toBe(undefined)
    expect(sll.set(4, 4)).toBe(undefined)
    expect(sll.toArray()).toEqual([])
    sll.push(1);
    sll.push(2);
    sll.push(3)
    expect(sll.toArray()).toEqual([1, 2, 3])
    expect(sll.set(0, 10)).toBe(10)
    expect(sll.toArray()).toEqual([10, 2, 3])
    expect(sll.set(1, 20)).toBe(20)
    expect(sll.toArray()).toEqual([10, 20, 3])
    expect(sll.set(2, 30)).toBe(30)
    expect(sll.toArray()).toEqual([10, 20, 30])
    expect(sll.set(3, 40)).toBe(undefined)
    expect(sll.toArray()).toEqual([10, 20, 30])
    expect(sll.set(4, 50)).toBe(undefined)
    expect(sll.toArray()).toEqual([10, 20, 30])
  })

  test('insert item', () => {
    expect(sll.insert(4, 0)).toBe(undefined)
    expect(sll.insert(4, 4)).toBe(undefined)
    expect(sll.toArray()).toEqual([])
    sll.push(1);
    sll.push(2);
    sll.push(3)
    expect(sll.toArray()).toEqual([1, 2, 3])
    expect(sll.insert(0, 10)).toBe(10)
    expect(sll.toArray()).toEqual([10, 1, 2, 3])
    expect(sll.insert(1, 20)).toBe(20)
    expect(sll.toArray()).toEqual([10, 20, 1, 2, 3])
    expect(sll.insert(2, 30)).toBe(30)
    expect(sll.toArray()).toEqual([10, 20, 30, 1, 2, 3])
    expect(sll.insert(6, 90)).toBe(90)
    expect(sll.toArray()).toEqual([10, 20, 30, 1, 2, 3, 90])
    expect(sll.insert(8, 190)).toBe(undefined)
    expect(sll.toArray()).toEqual([10, 20, 30, 1, 2, 3, 90])
    sll.clear();
    expect(sll.size).toBe(0);
    expect(sll.isEmpty()).toBe(true);
    expect(sll.toArray()).toEqual([])
  })

  test('remove item', () => {
    expect(sll.remove(4)).toBe(undefined)
    expect(sll.toArray()).toEqual([])
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])
    expect(sll.remove(0)).toBe(1)
    expect(sll.toArray()).toEqual([2, 3, 4, 5])
    expect(sll.remove(3)).toBe(5)
    expect(sll.toArray()).toEqual([2, 3, 4])
    expect(sll.remove(1)).toBe(3)
    expect(sll.toArray()).toEqual([2, 4])
    sll.clear();
    expect(sll.size).toBe(0);
    expect(sll.isEmpty()).toBe(true);
    expect(sll.toArray()).toEqual([])
  })

  test('reverse & clear', () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])
    sll.reverse();
    expect(sll.toArray()).toEqual([5, 4, 3, 2, 1])
    sll.reverse();
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])
    sll.clear();
    expect(sll.size).toBe(0);
    expect(sll.isEmpty()).toBe(true);
    expect(sll.toArray()).toEqual([])
  })
});