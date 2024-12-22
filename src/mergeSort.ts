import { merge } from "./mergeTwoSortedArrays";

function mergeSort(A:number[]):number[]{
    if(A.length <= 1){
        return A ;
    }

    let N:number = A.length;

    let arr1 = [];
    for(let i = 0; i < Math.floor(N/2); i++){
        arr1.push(A[i])
    }

    let arr2 = []
    for(let i = Math.floor(N/2); i < N; i++ ){
        arr2.push(A[i])
    }

    let sortedArry1:number[] | undefined = mergeSort(arr1)
    let sortedArry2:number[] | undefined = mergeSort(arr2)

    // @ts-ignore
    return merge(sortedArry1,sortedArry2);
}



console.log(mergeSort([3,4,1,2,5,7,6,9,8]))