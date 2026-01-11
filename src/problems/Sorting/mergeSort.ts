function merge(arr: number[], start: number, end: number){
    let temp = [];
    let i = start;
    let mid = Math.floor(start + ((end-start )/ 2));
    let j = mid + 1;

    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;
        }else{
            temp.push(arr[j]);
            j++;
        }
    }

    while(i <= mid){
        temp.push(arr[i]);
        i++;
    }

    while(j <= end){
        temp.push(arr[j]);
        j++;
    }

    for(let i = 0; i < temp.length; i++){
        arr[start + i] = temp[i];
    }
}

function mergeSort(arr:number[],start:number,end:number){
    if(end === start){
        return;
    }
    let mid = Math.floor(start + ((end-start )/ 2));
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end);
}

let arr = [38, 27, 4,43, 3, 9, 82, 5, 10, 1, 7];
mergeSort(arr, 0, arr.length-1);
console.log(arr);