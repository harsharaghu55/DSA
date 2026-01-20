class Stack<T>{
    private stack:T[] = [];

    public push (val:T):void {
        this.stack.unshift(val)
    }

    public pop():T{
        if(this.stack.length > 0){
            return this.stack.shift() as T
        }
        
        throw Error("Stack is empty");
    }

    public peak():T{
        if(!this.isEmpty()){
            return this.stack[0]
        }

        throw Error("Stack is empty");
    }

    public isEmpty():Boolean{
        return this.stack.length === 0;
    }

    public size():number{
        return this.stack.length;
    }
}