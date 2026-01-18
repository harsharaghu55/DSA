//Given an integer array, consider the first element as poivot and rearrange the elements such that for all i
// if (A[i] < p) then it should be present on left side 
// if (A[i] > p) then it should be present on right side

// All the elements are distinct 
// Return the correct position of pivot 

function findCorrectPosition(array:number[]){
    let left = 1;
    let right = array.length - 1;
    let pivot = array[0];

    while(left <= right){
        if(array[left] < pivot){
            left++;
        }else{
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            right--;
        }
    }

    let temp = array[right];
    array[right] = pivot;
    array[0] = temp;
    return right;
}

let findCorrectPositionArray = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(findCorrectPosition(findCorrectPositionArray))
console.log(findCorrectPositionArray)