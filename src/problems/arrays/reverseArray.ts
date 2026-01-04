export function reverseArray(arr:number[],start:number,end:number):void{
  while(start<end){
    [arr[start],arr[end]]=[arr[end],arr[start]];
    start++;
    end--;
  }
}