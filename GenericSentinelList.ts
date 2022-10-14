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
    public count: number = 0;

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
      this.count++;

      return newNode;
    }

    public addToBack(...values: Type[]): boolean {
      values.forEach((value) =>
        this.addValue(this.tail.prev as Node<Type>, value)
      );
      return true;
    }

    public addToFront(...values: Type[]): boolean {
      values.forEach((value) => this.addValue(this.head as Node<Type>, value));
      return true;
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
list.addToFront(2, 4, 6, 8);
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
