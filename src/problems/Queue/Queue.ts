export class Queue<T> {
    private queue:T[] = []
    private queueSize = 0

    size():number {
        return this.queueSize
    }

    enqueue(value:T):void{
        this.queue.push(value)
        this.queueSize++;
    }

    dequeue(){
        this.queueSize--
        return this.queue.shift()
    }

    isEmpty():boolean{
        return this.queueSize === 0
    }

    rare(): T|null{
        if(this.queueSize > 0){
            return this.queue[this.queueSize - 1]
        }
        return null;
    }

    front(): T | null {

        if(this.queueSize > 0){
            return this.queue[0]
        }

        return null
        
    }
}
