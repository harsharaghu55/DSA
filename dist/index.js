"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binary_search_1 = require("./problems/arrays/binary-search");
function run() {
    const arr = [1, 3, 4, 7, 9, 12, 15, 21];
    const target = 12;
    const idx = (0, binary_search_1.binarySearch)(arr, target);
    console.log("Array:", arr);
    console.log("Target:", target);
    console.log("Result index:", idx);
}
run();
/**
 * Tip:
 * - Swap `target` or call other problems from `src/problems/**` as you practice.
 * - Nodemon will rerun this file whenever you save changes under `src`.
 */
``;
