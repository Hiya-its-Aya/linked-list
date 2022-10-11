

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    // add node at end
    append(data){
        let node = new Node(data);
        let curr;

        // if empty, make head
        if (!this.head){
            this.head = node;
        } else {
            curr = this.head;

            while(curr.next){
                curr = curr.next;
            }

            curr.next = node;
        }

        this.size++;
    }
    
    // addd node at beginning 
    preppend(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //return # of nodes 
    
    // return first node

    // returns last node 
    last(){
        let curr = this.head;
        let last;
        while(curr){
            last = curr.data; 
            curr = curr.next
        }
        return last
    }

    // returns node at index
    at(num){
       let curr = this.head;
        for (let i = 0; i < this.size; i++){
            if(num === i) return curr;
            curr = curr.next;
       }
    }

    // removes node (pops)
    pop(){
        let secondToLastNode = this.at(this.size-2);
        secondToLastNode.next = null;
        this.size--;
    }
    // contains (value)
    contains(value){
        let curr = this.head
        while(curr){
            if (curr.data === value) return true;
            curr = curr.next; 
        }
        return false;
    }

    // finds (value)
    find(value){
        if (this.contains(value) === false) return null;
        for( let i =0; i < this.size; i++){
            if(this.at(i).data === value) return i;
        }
    }
    // toString -> format should be (value)->(value) ... -> null
    toString(){
        let curr = this.head;
        let string= "";
        while(curr){
            string = string + "(" + curr.data + ") -> "
            curr = curr.next;
        }
        string = string + "null"
        console.log(string);
    }

    insertAt(data, index){
        if (!this || index === 0) return this.preppend(data);
        let before = this.at(index-1);
        let after = before.next;
        before.next = new Node(data, after);
        this.size++;
    }

    removeAt(index){
        let before = this.at(index-1);
        let after = this.at(index).next;
        before.next = after;
        this.size--;
    }
}


// const ll = new LinkedList();

// ll.append(100);
// ll.append(200);
// ll.append(400);

// ll.toString();

// console.log(ll.size)

// console.log(ll.find(300))

// ll.insertAt(300, 3);
// console.log(ll.last())

// console.log(ll.at(1))

// ll.pop()

// ll.toString();


ll.removeAt(2);

ll.toString();