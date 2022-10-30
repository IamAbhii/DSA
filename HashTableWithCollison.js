class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size = 10) {
    this.table = [];
    this.size = new Array(size);
  }

  hash(key) {
    return key % 10;
  }

  put(key, value) {
    const offset = this.hash(key);

    const newEntry = new Node(key, value);
    newEntry.next = this.table[offset];
    this.table[offset] = newEntry;
  }

  get(key) {
    const offset = this.hash(key);

    for (let current = this.table[offset]; current; current = current.next) {
      if (key === current.key) {
        return current.value;
      }
    }
    return false;
  }

  remove(key) {
    const offset = this.hash(key);
    let back = this.table[offset];
    for (let current = this.table[offset]; current; current = current.next) {
      if (key === current.key) {
        if (back === current) {
          this.table[offset] = current.next;
        } else {
          back.next = current.next;
        }
        return true;
      }
      back = current;
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      let output = `[${i}]`;
      for (let current = this.table[i]; current; current = current.next) {
        output += `{${current.key}:${current.value}}->`;
      }
      console.log(output);
    }
  }
}

const ht = new HashTable();
ht.put(224, "BigB");
ht.put(420, "smallB");
ht.put(533, "QueenB");
ht.put(514, "MomB");
ht.put(516, "DumbB");

ht.print();
