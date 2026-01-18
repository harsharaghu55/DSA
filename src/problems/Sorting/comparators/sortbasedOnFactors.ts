// you are given an array A of N elements . sort the given array in increasing order of number of distinct factors of each lement, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be last one if 2 elements have same number of factors, then number with less value should come first

function getFactors(ele:number){
    let factors = 0;
    for(let i = 1; i * i <= ele; i++){
        if(ele % i === 0){
            let b = ele/i;
            if(ele === b){
                factors = factors + 1
            }else {
                factors = factors + 2;
            }
        }
    }
    return factors;
}

function sortWithCostomComparator(array:number[]){
    array.sort((a,b) => {
        let factorsA = getFactors(a);
        let factorsB = getFactors(b)
        if(factorsA == factorsB){
            return a - b;
        }

        return factorsA - factorsB
    })
    return array;
}

console.log(sortWithCostomComparator([4,3,2,1,5,6]))
