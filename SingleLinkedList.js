class Node {
  constructor(value) {
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
    const spot = new Node(value);
    if (this.head === null) {
      this.head = spot;
      console.log("head", this.head);
    } else {
      this.tail.next = spot;
    }
    this.tail = spot;
    console.log("tail after if", this.tail);
  }

  print() {
    for (let current = this.head; current !== null; current = current.next) {
      console.log(current.value);
    }
  }
}

const list = new List();
list.add("Church ke peeche");
list.add("Iron track - station");
// list.add("take to the sky -airport");

list.print();
