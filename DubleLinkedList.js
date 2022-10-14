class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  removeValue(value) {
    for (
      let searchNode = this.head;
      searchNode !== null;
      searchNode = searchNode.next
    ) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return true;
      }
      if (searchNode.value === value) {
        if (searchNode === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
          return true;
        }
        if (searchNode === this.head) {
          this.head = this.head.next;
          this.head.prev = this.head;
          return true;
        }
        searchNode.next.prev = searchNode.prev;
        searchNode.prev.next = searchNode.next;
        return true;
      }
    }
    return false;
  }

  printForward() {
    for (let current = this.head; current !== null; current = current.next) {
      console.log(current.value);
    }
  }

  printBackward() {
    for (let current = this.tail; current !== null; current = current.prev) {
      console.log(current.value);
    }
  }
}

const list = new List();
list.add(1);
list.add(8);
list.add(5);
list.add(7);
// list.add("take to the sky -airport");
list.removeValue(8);
list.removeValue(5);
list.printForward();
// list.printBackward();
// list.printBackward();
