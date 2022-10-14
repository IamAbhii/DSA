class SentinelListRefined {
  constructor() {
    this.head = { prev: null };
    this.tail = { next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this._count = 0;
  }

  _addNode(node, value) {
    const newNode = { value: value };

    newNode.prev = node;
    newNode.next = node.next;

    newNode.prev.next = newNode.next.prev = newNode;
    this._count++;
    return true;
  }

  _searchNode(value) {
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      if (current.value === value) {
        return current;
      }
    }
    return null;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this._count--;
    return true;
  }

  addToBack(...values) {
    //Push
    values.forEach((value) => this._addNode(this.tail.prev, value));
  }

  addToFront(...values) {
    values.forEach((value) => this._addNode(this.head, value));
  }

  insertAfter(searchValue, ...insertValues) {
    const node = this._searchNode(searchValue);
    if (!node) return false;
    insertValues.forEach((insertValue) => this._addNode(node, insertValue));
    return true;
  }

  insertBefore(searchValue, ...insertValues) {
    const node = this._searchNode(searchValue);
    if (!node) return false;
    insertValues.forEach((insertValue) =>
      this._addNode(node.prev, insertValue)
    );
    return true;
  }

  removeFirst() {
    this._removeNode(this.head.next);
  }

  removeLast() {
    this._removeNode(this.tail.prev);
  }

  removeValue(...values) {
    const removed = [];
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      if (values.includes(current.value)) {
        removed.push(current.value);

        current = current.prev;
        this._removeNode(current.next);
        //this will remove the value in values array after finding its 1st occurrence.
        //this solution will not remove the 2nd occurrence of same value in link list.
        values.splice(values.indexOf(current.value), 1);
      }
    }
    return removed;
  }

  get count() {
    return this._count;
  }

  *values() {
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      yield current.value;
    }
  }

  printForward() {
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      console.log(current.value);
    }
  }
}

const list = new SentinelListRefined();

list.addToBack(5, 7, 8, 9);
list.addToFront(2, 4, 6, 8);
// list.removeValue(2, 4, 6, 8);
list.insertAfter(7, 11, 13, 14);
// list.insertBefore(9, 10, 20, 30);
// list.addToBack(7);
// list.addToBack(9);
// list.addToBack(11);

// list.removeFirst();
// list.removeLast();
// console.log(list.count);
list.printForward();
