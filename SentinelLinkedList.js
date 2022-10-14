class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = value;
  }
}

class SentinelLinkedList {
  constructor() {
    this.head = new Node(undefined);
    this.tail = new Node(undefined);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToBack(value) {
    const newNode = new Node(value);

    // start adding with tail
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    //asking tail to replace node
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  addToForward(value) {
    // // start with using head
    // // this will insert last as first.
    const newNode = new Node(value);

    newNode.next = this.head.next;
    newNode.prev = this.head;

    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  removeValue(value) {
    for (
      let deleteNode = this.head.next;
      deleteNode !== this.tail;
      deleteNode = deleteNode.next
    ) {
      if (deleteNode.value === value) {
        deleteNode.next.prev = deleteNode.prev;
        deleteNode.prev.next = deleteNode.next;
        return true;
      }
    }
  }

  insertValueAfter(searchValue, value) {
    const newNode = new Node(value);

    for (
      let searchNode = this.head.next;
      searchNode !== this.tail;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        newNode.next = searchNode.next;
        newNode.prev = searchNode;

        newNode.prev.next = newNode;
        newNode.next.prev = newNode;
        return true;
      }
    }
    return false;
  }

  insertValueBefore(searchValue, value) {
    const newNode = new Node(value);
    for (
      let searchNode = this.head.next;
      searchNode !== this.tail;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        newNode.next = searchNode;
        newNode.prev = searchNode.prev;

        newNode.next.prev = newNode;
        newNode.prev.next = newNode;
        return false;
      }
    }
    return false;
  }

  removeFirst() {
    const firstNode = this.head.next;
    this.head.next = firstNode.next;
    firstNode.next.prev = this.head;
  }
  removeLast() {
    const lastNode = this.tail.prev;
    this.tail.prev = lastNode.prev;
    lastNode.prev.next = this.tail;
  }

  removeFromFront(searchValue) {
    for (
      let searchNode = this.head.next;
      searchNode !== this.tail;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        if (searchNode.prev.prev === undefined) {
          return false;
        }

        searchNode.prev.prev.next = searchNode;
        searchNode.prev = searchNode.prev.prev;
        return true;
      }
    }
    return false;
  }

  removeFromBack(searchValue) {
    for (
      let searchNode = this.head.next;
      searchNode !== this.tail;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        if (searchNode.next.next === undefined) {
          return false;
        }

        searchNode.next.next.prev = searchNode;
        searchNode.next = searchNode.next.next;
        return true;
      }
    }
    return false;
  }

  printForward() {
    for (
      let currentNode = this.head.next;
      currentNode !== this.tail;
      currentNode = currentNode.next
    ) {
      console.log(currentNode.value);
    }
  }
}

const list = new SentinelLinkedList();

list.addToBack(1);
list.addToBack(5);
list.addToBack(7);
list.addToBack(17);

// list.removeValue(1);
// list.removeValue(5);
// list.removeValue(7);

// list.insertValueAfter(5, 12);
// list.removeLast();
// list.removeLast();

// list.removeFirst();
// list.removeLast();
// list.removeLast();
// list.removeLast();
// list.removeLast();

list.removeFromBack(17);

list.printForward();
