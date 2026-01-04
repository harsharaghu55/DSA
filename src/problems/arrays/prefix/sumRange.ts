function sumOfRange(arr:number[], mat:number[][]) {
  // Implementation here
  const prefixSum: number[] = [];
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    prefixSum[i] = (i === 0 ? 0 : prefixSum[i-1]) + arr[i];
  }
  for(const [start, end] of mat){
    sum = sum + prefixSum[end] - (start === 0 ? 0 : prefixSum[start -1]);
  }
  return sum;
}

const sum = sumOfRange([1,2,3,4,5], [[0,2],[1,3],[2,4]]);
console.log("Sum of Ranges:", sum);