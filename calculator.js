const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
  try {
    const first = parseFloat(await ask('Enter first number: '));
    const op = await ask('Choose operation (+, -, *, /): ');
    const second = parseFloat(await ask('Enter second number: '));

    let result;
    switch(op) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        if (second === 0) {
          console.log('Cannot divide by zero');
          rl.close();
          return;
        }
        result = first / second;
        break;
      default:
        console.log('Invalid operation');
        rl.close();
        return;
    }
    console.log(`Result: ${result}`);
  } finally {
    rl.close();
  }
}

main();
