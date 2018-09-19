const Stack = require('./entity/Stack');
const ReverseStack = require('./entity/ReverseStack');
const Element = require('./entity/Element');
const Analyzer = require('./entity/StringAnalyzer');

(()=> {

  let analyzer = new Analyzer();
  let stack = new Stack();
  let reverseStack = new ReverseStack();

  stack.push(new Element(5));
  stack.push(new Element('string'));
  stack.push(new Element(true));

  console.log(stack);

  stack.pop();

  console.log(stack);

  console.log(stack.peek().value);

  console.log('*********************************************');

  reverseStack.push(new Element(5));
  reverseStack.push(new Element('string'));
  reverseStack.push(new Element(true));

  console.log(reverseStack);

  console.log(reverseStack.peek());

  reverseStack.pop();

  console.log(reverseStack);

  analyzer.analyze('()()()()');
  analyzer.analyze('()())()');
  analyzer.analyze(')');

  let m = analyzer.calculate('8 2 + 5 * 9 +');

  console.log(m);


})();