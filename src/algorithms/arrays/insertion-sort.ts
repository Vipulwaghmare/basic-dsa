import { swap } from "../../utils";

export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let curr = i;
    while (curr > 0 && arr[curr] < arr[curr - 1]) {
      swap(arr, curr, curr - 1);
      curr--;
    }
  }
  return arr;
}