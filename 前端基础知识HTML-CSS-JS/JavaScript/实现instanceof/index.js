const myInstanceof = (l, r) => {
    if (typeof l === 'number' || typeof l === 'boolean' || typeof l === 'string') {
        return false;
    }
    let proto = Object.getPrototypeOf(l);
    const prototype = r.prototype;

    while (true) {
        if (proto === null) {
            return false;
        }

        if (proto === prototype) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }
}

const copyInstanceof = (l, r) => {
    if (typeof l === 'number' || typeof l === 'boolean' || typeof l === 'string') {
        return false
    }

    let proto = Object.getPrototypeOf(l);
    const prototype = r.prototype;

    while (true) {
        if (!proto) {
            return false;
        }

        if (proto === prototype) {
            return true;
        }

        proto === Object.getPrototypeOf(proto);
    }
}

// const a = 1;
// const b = [];
// const c = {};
// const d = function () { };

// console.log(myInstanceof(a, Number));
// console.log(myInstanceof(b, Array));
// console.log(myInstanceof(c, Object));
// console.log(myInstanceof(d, Function));
console.log(copyInstanceof(2, Number));


const assert = require('assert');

describe('myInstanceof', () => {
    it('should return true if l is an instance of r', () => {
        const obj = {
            foo: 'bar',
        };
        const MyClass = function () {
            this.name = 'John';
        };
        MyClass.prototype.sayName = function () {
            console.log(this.name);
        };
        const myInstanceofInstance = new MyClass();

        assert.strictEqual(myInstanceof(myInstanceofInstance, MyClass), true);
    });

    it('should return false if l is not an instance of r', () => {
        const obj = {
            foo: 'bar',
        };
        const MyClass = function () {
            this.name = 'John';
        };
        MyClass.prototype.sayName = function () {
            console.log(this.name);
        };

        assert.strictEqual(myInstanceof(obj, MyClass), false);
    });

    it('should return false if l is a primitive value', () => {
        assert.strictEqual(myInstanceof(123, String), false);
        assert.strictEqual(myInstanceof(true, Number), false);
        assert.strictEqual(myInstanceof('foo', Boolean), false);
    });
});