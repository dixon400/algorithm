class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor(head){
        this.head = null;
        this.length = 0
    }

    addNode(val){
        let node = new Node(val);
        let current;
        if(this.head == null){
            this.head = node
        }
        else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.length ++
    }
}