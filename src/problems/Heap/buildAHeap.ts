import { arrayBuffer } from "node:stream/consumers";

class MinHeap {
    private heap : number[];
    
    constructor(array:number[]) {
        this.heap = array;
        this.buildHeap();
    }

    private buildHeap() {
        const lastNonLeafIndex = Math.floor((this.heap.length -2) / 2) -1 
        for (let i = lastNonLeafIndex; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    private heapifyDown(index:number){
        const length = this.heap.length;
        while(index < length){
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if(left < length && this.heap[left] < this.heap[smallest]){
                smallest = left;
            }

            if(right < length && this.heap[right] < this.heap[smallest]){
                smallest = right;
            }

            if(smallest !== index){
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;  
            }
        }
    }

    public getHeap() :number[] {
        return this.heap;
    }

}

const rawData = [15, 10, 3, 8, 12, 9, 4];
const minHeap = new MinHeap(rawData);
console.log(minHeap.getHeap());

// lesson learned: 
// if learn something new, try to implement it is not has hard as you think
// when you implement it, you will find the gaps in your knowledge
// and you will remember it better