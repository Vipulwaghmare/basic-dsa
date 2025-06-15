import { describe, expect, test } from '@jest/globals';
import { bubbleSort, insertionSort, mergeSort, selectionSort } from '../../src/algorithms/arrays'

describe('Array Algorithms', () => {

  // beforeEach(() => {
  // });

  test('Bubble sort', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });


  test('Selection sort', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    expect(selectionSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });


  test('Selection sort', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    expect(insertionSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

  test('Merge sort', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
});