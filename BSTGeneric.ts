namespace Tree {
  class Node<T> {
    public left?: Node<T>;
    public value: T;
    public right?: Node<T>;

    public constructor(value: T) {
      this.value = value;
    }
  }

  export class BST<T> {
    public root?: Node<T>;
    add(node: Node<T> | undefined, value: T) {
      if (!node) return new Node(value);

      if (value > node.value) {
        node.right = this.add(node.right, value);
      } else {
        node.left = this.add(node.left, value);
      }

      return node;
    }

    print(node: Node<T> | undefined) {
      if (!node) return;
      this.print(node.left);
      console.log(node.value);
      this.print(node.right);
    }
  }
}

const ped = new Tree.BST();

ped.root = ped.add(ped.root, 5);
//TODO console.log: Remove when done
console.log(ped.root);
ped.root = ped.add(ped.root, 7);
console.log(ped.root);
ped.root = ped.add(ped.root, 1);
console.log(ped.root);

ped.print(ped.root);
