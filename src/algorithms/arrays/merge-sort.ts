import { mergeSortedArrays } from "../../utils";

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return mergeSortedArrays(left, right);
}