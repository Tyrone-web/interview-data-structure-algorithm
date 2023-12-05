// 函数组合（compose）: 将多个独立的函数组合，构造声明式的数据流

const pipe = (...funcs) => {
    const callback = (input, func) => {
        return func(input);
    }

    return params => {
        return funcs.reduce(callback, params); // pipe函数
        // return funcs.reduceRight(callback, params); // compose：倒叙的pipe，从右往左
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

const compose = (...funcs) => {
    return function (param) {
        return funcs.reduce((acc, func) => {
            return func(acc);
        }, param);
    }
}

// 正则校验邮箱
const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
const checkEmail = (email) => {
    return reg.test(email);
}

// 校验手机号
const checkPhone = (phone) => {
    return /^1[34578]\d{9}$/.test(phone);
}

const res1 = checkEmail('123@qq.com');
console.log(res1);;
// 组合三个函数
const compute = compose(add4, mutiply3, divide2);
// const compute = pipe(divide2, mutiply3, add4);
// console.log(compute(10));
