type Nullable<T> = T | null;

namespace MySentinel {
  class Node<T> {
    public prev: Nullable<Node<T>> = null;
    public value?: T;
    public next: Nullable<Node<T>> = null;

    public constructor(value?: T) {
      this.value = value;
    }
  }

  export class SentinelListRefined<Type> {
    public head: Node<Type> = new Node<Type>();
    public tail: Node<Type> = new Node<Type>();
    private _count: number = 0;

    constructor() {
      this.tail.prev = this.head;
      this.head.next = this.tail;
    }

    private addValue(node: Node<Type>, value: Type) {
      const newNode = new Node(value);

      newNode.prev = node;
      newNode.next = node.next as Node<Type>;

      newNode.prev.next = newNode;
      newNode.next.prev = newNode;
      this._count++;

      return newNode;
    }

    private searchNode(value: Type): Node<Type> | null {
      for (
        let current = this.head.next;
        current !== this.tail;
        current = current!.next
      ) {
        if (current!.value === value) {
          return current;
        }
      }
      return null;
    }

    private removeNode(node: Node<Type>) {
      node.prev!.next = node.next;
      node.next!.prev = node.prev;
      this._count--;
      return true;
    }

    public addToBack(...values: Type[]): boolean {
      values.forEach((value) =>
        this.addValue(this.tail.prev as Node<Type>, value)
      );
      return true;
    }

    public addToFront(...values: Type[]): boolean {
      values.forEach((value) => this.addValue(this.head, value));
      return true;
    }

    public insertAfter(searchValue: Type, ...values: Type[]): boolean {
      const node = this.searchNode(searchValue);
      if (node) {
        values.forEach((value) => this.addValue(node, value));
        return true;
      }
      return false;
    }

    public insertBefore(searchValue: Type, ...values: Type[]): boolean {
      const node = this.searchNode(searchValue);
      if (node) {
        values.forEach((value) =>
          this.addValue(node.prev as Node<Type>, value)
        );
        return true;
      }
      return false;
    }

    public removeLast() {
      if (this.tail.prev !== this.head) {
        this.removeNode(this.tail.prev as Node<Type>);
        return true;
      }
      return false;
    }

    public removeFirst() {
      if (this.head.next !== this.tail) {
        this.removeNode(this.head.next as Node<Type>);
        return true;
      }
      return false;
    }

    get count() {
      return this._count;
    }

    removeValue(...values: Type[]) {
      const removed = [];
      for (
        let current = this.head.next;
        current !== this.tail;
        current = current!.next
      ) {
        if (current && values.includes(current.value as Type)) {
          removed.push(current);
          current = current.prev;
          this.removeNode(current!.next as Node<Type>);
        }
      }
      return removed;
    }

    printForward() {
      for (
        let current = this.head.next;
        current !== this.tail;
        current = current!.next
      ) {
        console.log(current!.value);
      }
    }
  }
}

const list = new MySentinel.SentinelListRefined<number>();

list.addToBack(5, 7, 8, 9);
list.removeValue(7, 8);

// list.removeFirst();
// list.removeLast();

// list.addToFront(2, 4, 6, 8);
// list.insertBefore(4, 10, 20);
// list.insertAfter(4, 30, 40);
// list.removeValue(2, 4, 6, 8);
// list.insertAfter(7, 11, 13, 14);
// list.insertBefore(9, 10, 20, 30);
// list.addToBack(7);
// list.addToBack(9);
// list.addToBack(11);

// list.removeFirst();
// list.removeLast();
// console.log(list.count);
list.printForward();
