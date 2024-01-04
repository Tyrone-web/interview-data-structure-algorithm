
const cloneDeep = obj => {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    let result = obj instanceof Array ? [] : {};

    for (let key in obj) {
        // 不克隆原型链上的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeep(obj[key]);
        }
    }

    return result;
}

const obj = {
    name: 'xxx',
    age: 23,
    address: {
        city: 'beijing',
        phone: [1, 2, 3]
    },
    father: {
        name: 'xxxx',
        age: 49
    }
};

const obj1 = cloneDeep(obj);
obj1.address.city = 'shanghai';
console.log(obj.address.city);

