const increaseCounter = document.querySelector('[increase-button]');
const decreaseCounter = document.querySelector('[decrease-button]');
const operand = document.querySelector('[operand]');

class Counter {
  constructor() {
    this.count = 0;
  }

  increaseCount() {
    this.count += 1;
    Counter.display();
  }

  decreaseCount() {
    this.count -= 1;
    Counter.display();
  }

  display() {
    operand.innerText = `${this.count}`;
  }
}

increaseCounter.addEventListener('click', (e) => {
  console.log('Hello');
  Counter.increaseCount();
});

decreaseCounter.addEventListener('click', (e) => {
  console.log('Hello');
  Counter.decreaseCount();
});
