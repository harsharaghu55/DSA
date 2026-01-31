let x = [-1,2,4,9,3,-8,7,-8,-9,-9]

/** 
______________observations______________
If all elements are positive then add all the numbers
if sum at any point becomes -ve make sum as zero
if all the elements are negative just take the largest element
*/
// find the largest sub array sum 
function kadenseAlgo(array: number[]){
    let maxSum = Number.NEGATIVE_INFINITY
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
        maxSum = Math.max(sum, maxSum);
        if(sum < 0){
            sum = 0;
        }
    }

    return maxSum;
}

function largestSumSubArrayLength(array:number[]){
    let maxSum = Number.NEGATIVE_INFINITY
    let sum = 0;
    let start = 0;
    let left = -1;
    let right = -1;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
        if(sum > maxSum){
            maxSum = Math.max(sum, maxSum);
            right = i;
            left = start;
        }
       
        if(sum < 0){
            sum = 0;
            start = i+1;
        }
    }

    return [left,right];
}


console.log(kadenseAlgo(x));
console.log(largestSumSubArrayLength(x));