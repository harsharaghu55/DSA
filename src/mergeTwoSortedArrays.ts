export function merge(arr1: number[], arr2: number[]): number[] {
    let N1: number = arr1.length;
    let N2: number = arr2.length;
    let i: number = 0, j: number = 0;
    let sortedArray: number[] = [];

    while (i < N1 && j < N2) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        } else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < N1) {
        sortedArray.push(arr1[i]);
        i++;
    }

    while (j < N2) {
        sortedArray.push(arr2[j]);
        j++;
    }

    return sortedArray;
}
