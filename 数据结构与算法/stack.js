class Stack {
    constructor() {
        this.list = [];
    }

    push = (item) => {
        this.list.push(item);
    }

    pop = () => {
        return this.list.pop();
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    push = (item) => this.queue.push(item);

    shift = () => this.queue.shift();
}

const Ten2Two = (num) => {
    const stack = new Stack();
    let resultStr = '';
    while (num > 0) {
        if (num % 2 === 0) {
            stack.push(0)
        } else {
            stack.push(1);
        }

        num = Math.floor(num / 2);
    }

    while (stack.list.length) {
        resultStr += stack.list.pop();
    };

    return resultStr;
}

console.log(Ten2Two(100), 'result'); // 1100100

