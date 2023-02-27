function myNew(Func, ...args) {
    let obj = {}; // 1、创建一个新的对象
    obj.__proto__ = Func.prototype; // 新对象的原型指向函数的prototype
    const result = Func.apply(obj, args); // 执行函数并把函数的this指向为新对象，给新对象添加属性

    // 判断函数执行的结果如果是引用类型直接返回，或者返回新对象
    return result instanceof Object ? result : obj;
}

function copyNew(FUnc, ...args) {
    let obj = {};
    obj.__proto__ = FUnc.prototype;
    const result = Func.apply(obj, args);

    return result instanceof Object ? result : obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;

    // return 'test';
    return { test: 'test' };
}

console.log(new Person());

Person.prototype.say = function () {
    return 'Hello';
}

const p = myNew(Person, 'test', 12);

