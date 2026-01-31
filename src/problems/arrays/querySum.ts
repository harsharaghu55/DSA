type Tuple = [number, number]
function nQuerySum(resArrLength:number,array:Tuple[]){
    // let resArrLength= Number.NEGATIVE_INFINITY
    // array.forEach((ele)=>{
    //     if(ele[0] > resArrLength){
    //         resArrLength = ele[1];
    //     }
    // })
    let resArr = new Array(resArrLength).fill(0);

    array.forEach((ele) =>{
        let i = ele[0];
        let j = ele[1];
        resArr[i] = j;
    })

    resArr.forEach((ele,index,arr)=>{
        resArr[index] = index === 0 ? ele : ele + resArr[index-1]
        console.log(arr);
    })

    console.log(resArr);
}

nQuerySum(6,[[1,3],[4,2],[3,1]])