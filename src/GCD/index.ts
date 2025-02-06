// find the number of pair with sum % m = 0 i.e (A[i] + A[j]) % m = 0

function findPairWithModuleSumZero(A:number[],m:number){
    let map = new Map();
    let count = 0;
    for(let i = 0; i < A.length;i++){
        A[i] = A[i] % m
    }

    for(let i = 0; i < A.length; i++){
        let diff 
        if(A[i] === 0){
            diff = 0
        }else{
            diff = m - A[i]
        }
        

        if(map.has(diff)){
            count = count + map.get(diff)   
        }
        
        if(map.has(A[i])){
            map.set(A[i],map.get(A[i]) + 1)
        }
        else{
            map.set(A[i], 1)
        }
    }

    console.log(A)
    console.log(map)
    console.log(count)
    return count;
}

// findPairWithModuleSumZero([2 ,3 ,4 ,8 ,6 ,15 ,5 ,12 ,17 ,7 ,18], 6)

function GCD(a:number,b:number){
    if(b === 0){
        return a
    }
    console.log(`a=>${a} b=>${b}`)
    return GCD(b,a % b);
}



console.log(GCD(5,12));