//Given two array A[n] and B[m] calculate the no of pairs i,j such that A[i] > B[j];
// A = [ 7,3,5]
// B = [2,0,6]

function findPairs(A:number[],B:number[]):number{
    let pairs:number = 0;
    A.sort();
    B.sort();
    let i = 0;
    let j = 0;
    while(i < A.length && j < B.length){
        if(A[i] > B[j]){
            pairs += A.length - i;
            j++;
        }else{
            i++;
        }
    }

    return pairs
}

console.log(findPairs([7,3,5,4],[2,0,6]))
