class Node {
  constructor(value) {
    this.right = null;
    this.value = value;
    this.left = null;
  }
}

class Tree {
  level = 0;

  addNode(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value > node.value) {
      node.right = this.addNode(node.right, value);
    } else {
      node.left = this.addNode(node.left, value);
    }
    return node;
  }

  add(value) {
    this.root = this.addNode(this.root, value);
  }

  removeNode(node, value) {
    if (!node) return false;
    if (value > node.value) {
    }
  }

  remove(value) {
    function removeNode(node) {
      if (!node) return null;
      //search node
      if (value > node.value) {
        node.right = removeNode(node.right);
      } else if (value < node.value) {
        node.left = removeNode(node.left);
      } else {
        // found the value
        if (!node.left || !node.right) {
          return node.left ?? node.right;
        }

        let successor = node.right;
        while (successor.left != null) {
          successor = successor.left;
        }

        node.value = successor.value;
        value = successor.value;
        node.right = removeNode(node.right);
      }
      return node;
    }

    this.root = removeNode(this.root);
  }

  // remove(value) {
  //   // value is captured in closure
  //   function removeNode(node) {
  //     if (!node) return null;
  //
  //     if (value > node.value) {
  //       node.right = removeNode(node.right, value);
  //     } else if (value < node.value) {
  //       node.left = removeNode(node.left, value);
  //     } else {
  //       //~# If max one child
  //
  //       if (!node.left || !node.right) {
  //         // return node.left != null? node.left:node.right
  //         return node.left ?? node.right; //it will delete
  //       }
  //       // simplified above code
  //       // if (node.left === null && node.right !== null) {
  //       //   return node.left;
  //       // }
  //       //
  //       // if (node.left !== null && node.right === null) {
  //       //   return node.right;
  //       // }
  //
  //       // 2. both children present
  //       let successor = node.right;
  //       while (successor.left != null) {
  //         successor = successor.left;
  //       }
  //       // steal his value
  //       node.value = successor.value;
  //       // now quietly kill the successor
  //       value = successor.value;
  //       node.right = removeNode(node.right);
  //     }
  //     return node;
  //   }
  //   this.root = removeNode(this.root, value);
  // }

  printInOrder(node) {
    if (!node) return;

    this.level++;
    this.printInOrder(node.right);
    console.log(" ".repeat(this.level * 4) + node.value);
    this.printInOrder(node.left);
    this.level--;
  }

  printPreOrder(node) {
    //N L R

    if (!node) return;

    this.level++;
    console.log(" ".repeat(this.level * 4) + node.value);
    this.printPreOrder(node.left);
    this.printPreOrder(node.right);
    this.level--;
  }

  printPostOrder(node) {
    //L R N
    if (!node) return;

    this.level++;
    this.printPostOrder(node.left);
    this.printPostOrder(node.right);
    console.log(" ".repeat(this.level * 4) + node.value);
    this.level--;
  }

  printInOrderNode() {
    this.printInOrder(this.root);
  }
  printPreOrderNode() {
    this.printPreOrder(this.root);
  }
  printPostOrderNode() {
    this.printPostOrder(this.root);
  }
}

const tree = new Tree();

tree.add(5);
tree.add(7);
tree.add(8);
tree.add(6);
tree.add(3);
tree.add(4);
tree.add(2);

tree.remove(5);
tree.printInOrderNode();
// tree.printPreOrderNode();
// tree.printPostOrderNode();

// // tree.add(root, 1);
// // tree.add(root, 7);
// // TODO console.log: Remove when done
// console.log({ root });
// tree.print(tree.root);

// const factorial = (n) => {
//   if (n === 0) return 1;
//   const semiFinalResult = n * (n - 1);
//   const finalResult = n * factorial(n - 1);
//   return finalResult;
// };
//
// //TODO console.log: Remove when done
// console.log(factorial(5));
