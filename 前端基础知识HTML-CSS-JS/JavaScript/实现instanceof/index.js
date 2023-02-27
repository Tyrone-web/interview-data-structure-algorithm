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
