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

// transpose of a squre matrix

function transposeMatrix(mat:number[][]){
    let rows = mat.length;
    let cols = mat[0].length;
    if(rows !== cols){
        return "it is not a square matrix"
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(r < c){
                swap(mat,r,c)
            }
        }
    }
}

function swap(mat:number[][], r:number, c:number){
    let temp = mat[r][c]
    mat[r][c] = mat[c][r]
    mat[c][r] = temp
}

transposeMatrix(mat)
// console.log(mat);
function getMirrorMat(mat:number[][]){
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col /2 ; c++){
            let temp = mat[r][c]
            mat[r][c] = mat[r][col - c -1]
            mat[r][col - c -1] = temp
        }
    }
}
getMirrorMat(mat)
console.log(mat)