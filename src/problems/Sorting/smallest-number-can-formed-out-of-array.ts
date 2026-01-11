// to get smallest number sort the array and concatenate the numbers because goal
// is to get smallest number at the largest place of value.

// Find the smallest no. that can be formed by re-arranging the digits of given no. in an array
//Return the smallest noDeprecation. in the form of an array

// Brute force 
function BruteForce ( array:number[] ){
    array.sort()
    return array.join('');
}

function frequecncyArrayMethod(array:number[]){
    let map = new Map<number,number>();
    let max = Number.NEGATIVE_INFINITY;
    let sortedArray:number[] = [];
    for(let num of array){
        if(map.has(num)){
            map.set(num, map.get(num)! + 1);
        }else{
            map.set(num, 1)
        }

        if(num > max){
            max = num;
        }
    }

    for(let i = 0; i <= max; i++){
        if(map.has(i)){
            let instance:number = map.get(i) ?? 0;
            for(let k = 1; k <= instance; k++){
                sortedArray.push(i)
            }
        }
    }

    return sortedArray.join('');
}

const array:number[]  = [6,3,4,2,7,2,1]
console.log(BruteForce(array))
console.log(frequecncyArrayMethod(array))
