// revise the recurssion classes
// time complexity is O(2^n) since it does not selecte on path it as does calculation in each step
/* ______________Properties of Dynamic Programming__________ */
/* 1. Optimal Structure:- We can find ans using smaller sub problems
    ex:- fib(n) = fib(n-1) + fib(n-2)

    2. Overlapping Subproblems:- Solving same subproblem multiple times

*/

// memoization :- in recursive solution store and reuse is called memoization 
let memo = new Map<number, number>()

function fibonacciWithMemo (num:number): number{
    if(num === 0 || num === 1){
        return num
    }

    if(memo.has(num)){
        return memo.get(num) as number
    }

    memo.set(num,fibonacciWithMemo(num-1) + fibonacciWithMemo(num-2))

    return memo.get(num) as number
}



function fibonacciWithoutMemo(num:number):number{
    if(num === 0 || num === 1){
        return num
    }

    return fibonacciWithoutMemo(num - 1) + fibonacciWithoutMemo(num -2)
}
// Code for Botto-up Approach


// console.log(fibonacciWithoutMemo(50))
console.log(fibonacciWithMemo(50))
console.log(memo);
