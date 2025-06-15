export function swap<T>(arr: T[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}

export function mergeSortedArrays(arr1: number[], arr2: number[]) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      result.push(arr2[j]);
      j++;
    } else if (j >= arr2.length) {
      result.push(arr1[i])
      i++;
    } else if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j])
      j++;
    }
  }
  return result;
}