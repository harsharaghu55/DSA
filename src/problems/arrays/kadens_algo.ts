let x = [1,2,4,-6,7,8,9]

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

console.log(kadenseAlgo(x));