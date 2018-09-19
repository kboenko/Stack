const Stack = require('./Stack');

class StringAnalyzer {

  constructor() {
    this.stack = new Stack();
  }

  analyze(string) {
    if ( !(/^[\(\)]+$/.test(string)) ) {
      console.log('Строка должна состоять только из открывающихся и закрывающихся скобок!')
    } else {
      if ( string.charAt(0) === ')' || string.charAt(string.length - 1) === '(' ) {
        console.log('Скобки несбалансированы!');
      } else {
        for (let i = 0; i < string.length; i++) {

          switch (string.charAt(i)) {
            case '(':
              this.stack.push('+');
              break;
            case ')':
              this.stack.pop();
              break;
          }

          if ( this.stack.size() === 0 && (i !== string.length - 1 && string.charAt(i + 1) === ')') ) {
            console.log('Скобки несбалансированы!');
            return;
          }

        }

        if (this.stack.size() === 0) {
          console.log('Скобки сбалансированы!');
        } else {
          console.log('Скобки не сбалансированы!');
        }
      }

    }
  }

  calculate(string) {
    if ( !(/^[0-9*+-/\s]+$/.test(string)) ) {
      console.log('Строка должна состоять только из цифр, символов *+-/ и пробела');
    } else {

      let stack1 = new Stack();
      let stack2 = new Stack();

      string.split(' ').reverse().forEach(item => stack1.push(item));

      stack2.push(+stack1.peek());
      stack1.pop();

      while (stack1.size() > 0) {
        stack2.push(+stack1.peek());
        stack1.pop();

        if (isNaN(parseInt(stack1.peek()))) {

          let result = 0;

          switch (stack1.peek()) {
            case '+':
              result = stack2.storage.reduce((sum, cur) => { return sum + cur }, 0);
              break;
            case '-':
              result = stack2.storage.reduce((sum, cur) => { return sum - cur });
              break;
            case '*':
              result = stack2.storage.reduce((sum, cur) => { return sum * cur }, 1);
              break;
            case '/':
              result = stack2.storage.reduce((sum, cur) => { return sum / cur });
              break;
          }

          while (stack2.size() > 0) {
            stack2.pop();
          }

          stack2.push(result);
          stack1.pop();

        }

      }

      return stack2.peek();
    }

  }

}

module.exports = StringAnalyzer;