class Node {
    constructor(data=null){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class BST {
    constructor(data){
        this.root = null;
    }

    pushData(val){
        const node = new Node(val)
        if(this.root == null){
            this.root = node
        } else {
            current = this.root
            while(true){
                if(current.data > val){
                    if(current.left == null){
                        current.left = node
                        return this;
                    }else {
                        current = current.left
                    }
                }
                else if(current.data < val){
                    if(current.right == null){
                        current.right = node
                        return this;
                    }
                    else{
                        current = current.right
                    }
                }
            }
        }

    }
}