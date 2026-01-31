/**
 * Trees in real life are different than the tree in computer science. cs trees are inverted roots are at the top and
 * leafs are at the bottom
 * jargon or trees
 * 
 * Root: top most node of a tree.
 * node: any element of the tree is a node which contains data.
 * edge: relation or connection between the two nodes which represents the hirarcy is called Edge.
 * leaf: A node without any children is called leaf.
 * subtree: All the nodes that can be reached from a node is called sub-tree.
 * ==> A single node is a root as well as a leaf.
 * dept: number of nodes required reach a node is called depth.
 * height: edges b/w node and farthest leaf from node.
 * 
 * Binary Tree:-
 * Every node can have atmost 2 children {0,1,2}
 */

// Code for Binary tree
class TreeNode{
    data:number | null = null
    left:TreeNode | null = null
    right:TreeNode | null = null
}

/**
 * Traversals in a Binary Tree
 * 1> Preorder -> Node Left Right
 * 2> Inorder -> Left Node Right
 * 3> Postorder -> Left Right Node 
 */

// code for preorder
function preorder(root:TreeNode | null):void{
    if(root == null) return;

    console.log(root.data)
    preorder(root.left)
    preorder(root.right)
}

// code for inorder

function inOrder(root:TreeNode | null):void{
    if(root == null) return;

    inOrder(root.left)
    console.log(root.data)
    inOrder(root.right)
}

// code for postOrder
function postOrder(root:TreeNode | null):void{
    if(root == null) return;

    postOrder(root.left)
    postOrder(root.right)
    console.log(root.data)
}

// code for inOrder traversal using loop
function loopInOrderTraversal(root:TreeNode){
    let stack:TreeNode[] = [];
    let node: TreeNode | null = root
    while(node !== null || stack.length > 0){
        if(node !== null){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop() as TreeNode;
            console.log(node.data)
            node = node.right
        }
    }
}
