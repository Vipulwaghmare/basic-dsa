import { describe, expect, test } from '@jest/globals';
import { mergeSortedArrays, swap } from '../../src/utils';

describe('Util methods', () => {

  test('Swap Function', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    swap(array, 0, 1)
    console.log('aar', array)
    expect(array).toEqual([8, 9, 7, 6, 5, 4, 3, 2, 1])
    swap(array, 1, 2)
    expect(array).toEqual([8, 7, 9, 6, 5, 4, 3, 2, 1])
    swap(array, 5, 7)
    expect(array).toEqual([8, 7, 9, 6, 5, 2, 3, 4, 1])
  });

  test('Merge Sorted Arrays', () => {
    expect(mergeSortedArrays([4, 5, 6], [0, 1, 2, 300])).toEqual([0, 1, 2, 4, 5, 6, 300])
    expect(mergeSortedArrays([4, 5, 6], [0, 1])).toEqual([0, 1, 4, 5, 6,])
    expect(mergeSortedArrays([4,], [0, 1, 2, 300])).toEqual([0, 1, 2, 4, 300])
  })
});