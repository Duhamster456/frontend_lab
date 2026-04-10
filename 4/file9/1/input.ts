const calculate = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 0;
    default: return 0;
  }
};

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));