// print row wise and cloumn wise and column wise

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let res1 = [];
let res2 = [];
let col = mat[0].length;
let row = mat.length;
for(let r = 0; r < row; r++){
    for(let c = 0; c < col; c++){
       res1.push(mat[r][c]);
    }
}

for(let c = 0; c < col; c++){
    for(let r = 0; r < row; r++){
        res2.push(mat[r][c]);
    }
}
console.log(res1)
console.log(res2)

// print diagonal and anti diagonal
let r = 0 , c =  0;

while(r < row && c < col){
    console.log(mat[r][c])
    r++;
    c++;
}
console.log(" ")
r = 0 
c = col - 1
while(r < row && col >= 0){
    console.log(mat[r][c]);
    r++
    c--
}