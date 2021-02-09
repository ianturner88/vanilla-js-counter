const increaseCounter = document.querySelector('[data-increase]');
const decreaseCounter = document.querySelector('[data-decrease]');
const operand = document.querySelector('[data-operand]');

class Counter {
  constructor() {
    this.count = 0;
  }

  increaseCount() {
    this.count += 1;
    counter.display();
  }

  decreaseCount() {
    this.count -= 1;
    counter.display();
  }

  display() {
    operand.innerText = `${this.count}`;
  }
}

const counter = new Counter(
  // initialize the counter to zero
  operand
);

increaseCounter.addEventListener('click', (e) => {
  console.log('Hello');
  counter.increaseCount();
});

decreaseCounter.addEventListener('click', (e) => {
  console.log('Hello');
  counter.decreaseCount();
});
