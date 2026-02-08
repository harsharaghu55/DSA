/**
 * important for search 
 * also called prefix tree
 * Name tries came from retrival
 * main application of this data structure is fast and efficient retrival of strings based on prefixes
 * typically we represent each character of a string as trie node 
 * also very memory efficient data structure
 * 70% uses cases around strings 30% about bits and other things
 * when you see strings and prefixes try thing about tries
 */

type TrieData = string | null
class TrieNode {
    data:TrieData = 'a'
    isEnd:boolean = false
    children = new Map<string, TrieNode>()

    constructor(data:TrieData = null){
        this.data = data
    }
}

class Trie{
    root:TrieNode = new TrieNode()

    insert(word:string){
        let cur = this.root;
        for(let char of word){
            if(!cur.children.has(char)){
                let newNode = new TrieNode(char)
                cur.children.set(char,newNode)
            }

            cur = cur.children.get(char) as TrieNode
        }
        cur.isEnd = true
    }
}

let trie = new Trie()
trie.insert('cat')
trie.insert('car')
trie.insert('mat')
trie.insert('cart')
console.dir(trie, { depth: null, colors: true })