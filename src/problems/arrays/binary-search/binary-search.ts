function BinarySearch(sortedArray:number[],ele:number){
    let left = 0;
    let right = sortedArray.length - 1
    let mid = left + ((right - left) / 2)

    while(left > right){
        if(sortedArray[mid] === ele){
            return mid
        }

        if(sortedArray[mid] > ele){
            right = mid - 1
        }

        if(sortedArray[mid] < ele){
            left = mid + 1
        }
    }

    return -1;
}

console.log(BinarySearch([1,2,3,4,5,6,7],2))