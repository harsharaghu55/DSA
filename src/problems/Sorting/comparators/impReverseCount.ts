// Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
// Return the number of important reverse pairs in the given array A.
function merge(array:number[],start:number,end:number,mid:number){
    let temp = []
    let i = start
    let j = mid + 1;
    let mod = 1000000007;
    let k = 0
    let inversionpairs = 0;
    while(i <= mid && j <= end ){
        if(array[i] > (2 * array[j])){
            inversionpairs += (mid - i + 1) % mod;
            j++;
        }else{
            i++;
        }
    }

    i = start;
    j = mid+1;
    while(i <= mid && j <= end ){
        if(array[i] > array[j]){
            
            temp[k] = array[j]
            j++;
            k++;
        }else{
            temp[k] = array[i];
            i++
            k++
        }
    }

    while(i <= mid){
        temp[k] = array[i];
        i++;
        k++;
    }
    while(j <= end){
        temp[k] = array[j]
        j++;
        k++;
    }

    for(let ele of temp){
        array[start] = ele;
        start++;
    }

    return inversionpairs;
}

function inversionCount (array:number[], start:number, end:number):number{
    let mod = 1000000007;
    if(end <= start){
        return 0;
    }
    let mid = Math.floor((start + end) / 2);
    let leftCounts = inversionCount(array, start, mid)
    let rightCounts = inversionCount(array,mid + 1, end)
    let mergeCounts =  merge(array, start,end, mid)
    return (leftCounts + rightCounts + mergeCounts) % mod;
}

let inversionCountArray = [4,1,2]
console.log(inversionCount(inversionCountArray,0,inversionCountArray.length - 1))
