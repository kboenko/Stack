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
    if ( this.storage.length === 0) {
      this.storage.push(item);
    } else {
      this.storage.push(null);

      for (let i = this.storage.length - 2; i >= 0; i--) {
        this.storage[i+1] = this.storage[i];
      }

      this.storage[0] = item;
    }
  }

  pop() {
    this.storage.splice(0,1);
  }

}

module.exports = ReverseStack;