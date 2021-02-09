const increaseCounter = document.querySelector('[data-increase]');
const decreaseCounter = document.querySelector('[data-decrease]');
const operand = document.querySelector('[data-operand]');

class Counter {
  constructor() {
    this.count = 0;
  }

  increaseCount() {
    // ensures the count does not exceed 5
    if (counter.upperBoundary() == false) {
      this.count += 1;
    }
    counter.display();
  }

  decreaseCount() {
    // ensures the count does not exceed -5
    if (counter.lowerBoundary() == false) {
      this.count -= 1;
    }
    counter.display();
  }

  upperBoundary() {
    // increment the count by 1
    if (this.count > 4) {
      return true;
    }
    return false;
  }

  lowerBoundary() {
    // increment the count by -1
    if (this.count < -4) {
      return true;
    }
    return false;
  }

  display() {
    // output the result
    operand.innerText = `${this.count}`;
  }
}

const counter = new Counter(
  // initialize the counter to zero
  operand
);

increaseCounter.addEventListener('click', (e) => {
  counter.increaseCount();
});

decreaseCounter.addEventListener('click', (e) => {
  counter.decreaseCount();
});
