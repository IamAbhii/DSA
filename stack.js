class Stack {
  constructor(size) {
    this.size = size;
    this.array = [];
    this.top = -1;
  }

  push(value) {
    try {
      if (this.top < this.size) this.array[++this.top] = value;
      else {
        throw new Error();
      }
    } catch (e) {
      throw new Error("Stack overflow");
    }
  }

  pop() {
    if (this.top === -1) {
      throw new Error("Stack underflow");
    }
    return this.array[this.top--];
  }
}

const plates = new Stack(10);

for (let i = 0; i < 12; i++) plates.push("Plates" + i);

//TODO console.log: Remove when done
console.log(plates);
