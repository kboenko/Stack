class ReverseStack {

  constructor() {
    this.storage = [];
  }

  size() {
    return this.storage.length;
  }

  peek() {
    return this.storage[0];
  }

  push(item) {
    this.storage.unshift(item);
  }

  pop() {
    this.storage.shift();
  }

}

module.exports = ReverseStack;