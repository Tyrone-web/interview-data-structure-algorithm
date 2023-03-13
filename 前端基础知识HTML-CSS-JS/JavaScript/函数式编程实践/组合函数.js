// 函数组合（compose）: 将多个独立的函数组合，构造声明式的数据流

const pipe = (...funcs) => {
    const callback = (input, func) => {
        return func(input);
    }

    return params => {
        // return funcs.reduce(callback, params); // pipe
        return funcs.reduceRight(callback, params); // compose
    }
}

function add4(num) {
    return num + 4
}

function mutiply3(num) {
    return num * 3
}

function divide2(num) {
    return num / 2
}

// 组合三个函数
const compute = pipe(add4, mutiply3, divide2);
// const compute = pipe(divide2, mutiply3, add4);
console.log(compute(10));
