class Node {
    constructor(val) {
        this.val = null;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length =0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var shifted = this.head;
        this.head = shifted.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return shifted;
    }

    unshift(val) {
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++
        return this;
    }

    get(position) {
        if (position < 1 || position >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (position !== counter) {
            current = current.next;
            counter++;
        }
        return current;
        
    }

    set(position, value) {
        var foundNode = this.get(position);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(position, value) {
        if (position < 0 || position > this.length) return false;
        if (position === this.length) return !!this.push(value);
        if (position === 0) return !!this.unshift(value);
        var previous = this.get(position - 1);
        var next = this.get(position);
        var newNode = new Node(value);
        newNode.next = next;
        previous.next = newNode;
        this.length++;
        return true;
    }

    remove(position) {
        if (position < 0 || position >= this.length) return undefined;
        if (position === this.length - 1) return this.pop();
        if (position === 0) return this.shift();
        var previousNode = this.get(position - 1);
        var nextNode = this.get(position + 1);
        var removedNode = this.get(position);
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }


}