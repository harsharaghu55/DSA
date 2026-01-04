
import { binarySearch } from "./problems/arrays/binary-search";
import rotateArray from "./problems/arrays/rotateArray";

function run() {
  const arr = [1, 3, 4, 7, 9, 12, 15, 21];
  const target = 12;

  const idx = binarySearch(arr, target);
  console.log("Array:", arr);
  console.log("Target:", target);
  console.log("Result index:", idx);

  rotateArray(arr, 3);
  console.log("Array after rotation by 3:", arr);
}

run();

/**
 * Tip:
 * - Swap `target` or call other problems from `src/problems/**` as you practice.
 * - Nodemon will rerun this file whenever you save changes under `src`.
 */
``
