function mergeCount(arr:number[], start:number, end:number){
    let mid = Math.floor((start + end) / 2);
    let i:number = start;
    let j:number = mid + 1;
    let k:number = 0
    let temp: number[] = [];
    let inversionCount:number =  0;
    while(i <= mid && j <= end){
        if(arr[i] > arr[j]){
            temp[k] = arr[j];
            inversionCount += (mid - i + 1)
            k++;
            j++;
        }else{
            temp[k] = arr[i];
            i++;
            k++;
        }
    }

    while(i <= mid){
        temp[k] = arr[i];
        i++;
        k++;
    }
    while(j <= end){
        temp[k] = arr[j];
        j++;
        k++;
    }

    for(let p of temp){
        arr[start] = p;
        start++;
    }

    return inversionCount;
}

export function inversionCount(arr:number[], start:number, end:number):number{
    if(start >= end){
        return 0;
    }
    let mid = Math.floor((start + end) / 2);
    let leftInversionCount = inversionCount(arr, start, mid);
    let rightInversionCount = inversionCount(arr, mid + 1, end);
    let mergeInversionCount = mergeCount(arr, start, end);

    return leftInversionCount + rightInversionCount + mergeInversionCount;
}

let arr = [45,10,15,25,50];
console.log(inversionCount(arr, 0, arr.length - 1));