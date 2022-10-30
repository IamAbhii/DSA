class HashTable {
  constructor(size = 10) {
    this.size = size;
    //create node to accommodate collision strategy with linked list.
    this.table = new Array(this.size);
  }

  hash(key) {
    return key % 10;
  }

  put(key, value) {
    const offset = this.hash(key);

    // if(node.value){
    //     // create a node and attach it to the table offset index
    // }
    this.table[offset] = { key, value };
  }

  get(key) {
    const offset = this.hash(key);
    return this.table[offset];
  }

  remove(key) {
    const offset = this.hash(key);
    this.table[offset] = undefined;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(`[${i}]:${this.table[i]?.key}:${this.table[i]?.value}`);
    }
  }
}

const ht = new HashTable();
ht.put(224, "BigB");
ht.put(420, "smallB");
ht.put(533, "QueenB");
// ht.put(514, "MomB");

// ht.remove(420);
ht.print();
