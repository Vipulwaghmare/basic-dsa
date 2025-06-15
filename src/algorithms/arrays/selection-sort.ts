import { swap } from "../../utils";

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}