import { reverseArray } from "./reverseArray";

export default function rotateArray(arr: number[], k: number): void {
  const n = arr.length;
  k %= n; // Handle cases where k > n
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, n - 1);
}