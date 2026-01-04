"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
/**
 * Binary search on a sorted array.
 * Returns index if found, else -1.
 * Complexity: O(log n)
 */
function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        const val = arr[mid];
        if (val === target)
            return mid;
        if (val < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }
    return -1;
}
