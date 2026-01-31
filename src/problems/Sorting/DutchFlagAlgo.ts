function swap(array:number[],start:number,end:number){
    let temp = array[start]
    array[start] = array[end]
    array[end] = temp
}

function dutchFlagAlgo(array:number[]){
    let mid = 0
    let start = 0;
    let end = array.length - 1
    while(mid <= end){
        if(array[mid] === 0){
            swap(array,start,mid);
            start++;
            mid++;
        }else if(array[mid] == 1){
            mid++;
        }else{
            swap(array,mid,end)
            end--
        }
    }
    return array;
}


console.log(dutchFlagAlgo([2,1,0,1,2,0,2,2,2,0]))