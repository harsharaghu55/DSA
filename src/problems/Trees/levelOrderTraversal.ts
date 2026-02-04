import { TreeNode } from "./tree"
import { buildTreeFromInAndOutOrder } from './tree'
import { Queue } from '../Queue/Queue'

// interative code for inorder traversal
function inOrderTraversal(root:TreeNode){
    if(root == null) return
    let output=[]
    let queue = new Queue<TreeNode>()
    queue.enqueue(root)

    while(!queue.isEmpty()){
        root = queue.dequeue() as TreeNode
        output.push(root.data)

        if(root.left) queue.enqueue(root.left)
        if(root.right) queue.enqueue(root.right)
    }
    
    console.log(output)
}

// print right view of tree
function printTreeRightView (root: TreeNode) {
    if(root == null) return
    let output=[]
    let queue = new Queue<TreeNode>()
    queue.enqueue(root)
    let last = root
    let temp = root
    while(!queue.isEmpty()){
        temp = queue.dequeue() as TreeNode
        
        if(temp.left) queue.enqueue(temp.left as TreeNode)
        if(temp.right) queue.enqueue(temp.right as TreeNode)

        if(temp === last){
            output.push(last.data)
            if(!queue.isEmpty()){
                last = queue.rare() as TreeNode
            }
        }
    }
    
    console.log(output)
}

//vertical order traversal 
/**
 *-------- points to notice-----------
 * -1 /*\ +1
 * from top to bottom
 * overlap give perference to left
 */

 function verticalOrderTraversal(root:TreeNode){
    if(root === null) return

    let verticalTreeMap = new Map<number, (number | null)[]>()
    let queue = new Queue<[TreeNode,number]>()
    
    queue.enqueue([root,0])
    let temp = null
    let minValue = Number.POSITIVE_INFINITY
    let maxValue = Number.NEGATIVE_INFINITY
    while(!queue.isEmpty()){
       temp = queue.dequeue()
       if(temp){
            minValue = Math.min(temp[1],minValue)
            maxValue = Math.max(temp[1],maxValue)
       }
       if( temp && verticalTreeMap.has(temp[1]) ) {
            verticalTreeMap.get(temp[1])?.push(temp[0].data)
       }else{
            temp && verticalTreeMap.set(temp[1],[temp[0].data])
       }
       
       if(temp && temp[0].left !== null){
         queue.enqueue([temp[0].left , temp[1] - 1])
       }

       if(temp && temp[0].right !== null){
        queue.enqueue([temp[0].right, temp[1] + 1])
       }
    }

    for(let i = minValue; i <= maxValue; i++){
        console.log(verticalTreeMap.get(i))
    }

    //console.log(verticalTreeMap)
 }

let tree = buildTreeFromInAndOutOrder([4,2,7,5,1,3,6],[4,7,5,2,6,3,1])
verticalOrderTraversal(tree as TreeNode)