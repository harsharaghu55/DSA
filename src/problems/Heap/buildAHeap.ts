class MinHeap {
    private heap : number[];
    
    constructor(array:number[]) {
        this.heap = array;
        this.buildHeap();
    }

    private buildHeap() {
        const lastNonLeafIndex = Math.floor((this.heap.length -2) / 2)
        for (let i = lastNonLeafIndex; i >= 0; i--) {
            this.heapify(i);
        }
    }

    // add value to min heap
    public add(val:number){
        this.heap.push(val);
        let last = this.heap.length - 1; 

        while(last > 0){
            let parent = Math.floor((last - 1) / 2)
            if(this.heap[last] < this.heap[parent]){
                this.swap(parent, last)
                last = parent;
            }else{
                break
            }

        }
    }
    // ToDo: manually analyze if it goes out of bound


    private swap(first:number, last:number){
        let temp = this.heap[first]
        this.heap[first] = this.heap[last]
        this.heap[last] = temp
    }

    //extracting element from array
    public removeMin(){
        let first = 0;
        
        let val = this.heap[first]
        this.heap[first] = this.heap.pop() as number
        this.heapify(first)

        return val;
    }

    private heapify(index:number){

        let heapSize = this.heap.length

        while(2 * index + 1 < heapSize){
            let minValue = Math.min(this.heap[index], this.heap[2*index + 1], this.heap[2*index + 2])
            if(this.heap[index] === minValue){
                break
            }else if(this.heap[2*index + 1] === minValue){
                this.swap(index, 2*index + 1)
                index = 2*index + 1
            }else {
                this.swap(index, 2*index + 1)
                index = 2*index + 2
            }
        }        
    }
    //learn about safe get to impress interviewers
    //we are given an array of values we want to make a heap out of it
    // inplace :- without using an extra array
    // stable:- sorting or solving problem keeping same as original order when vlue are equal

    /* building a array if we sort the the array it self will become binary tree */
    /* _____________________ Formulaes____________________________________*/
    /* 
                
                            parent :- (i-1) / 2
                              |
                              |
                              O i:-index
                             / \
                            /   \
      left child :- (2*i) + 1    Right child :- (2*i) + 2

    */
    public getHeap() :number[] {
        return this.heap;
    }

}

const rawData = [15, 10, 3, 8, 12, 9, 4];
const minHeap = new MinHeap(rawData);
minHeap.add(2);
console.log(minHeap.getHeap())
console.log(minHeap.removeMin())
console.log(minHeap.getHeap());

// lesson learned: 
// if learn something new, try to implement it is not has hard as you think
// when you implement it, you will find the gaps in your knowledge
// and you will remember it better