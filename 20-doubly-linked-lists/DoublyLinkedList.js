class Node {
    constructor(value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        var shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index < this.length / 2) {
            var counter = 0;
            var currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        } else {
            var counter = this.length - 1;
            var currentNode = this.tail;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
            return currentNode;
        }
    }

    set(index, value) {
        var foundNode = this.get(index);
        if (foundNode != undefined) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        var newNode = newNode(value);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();
        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode
    }


}