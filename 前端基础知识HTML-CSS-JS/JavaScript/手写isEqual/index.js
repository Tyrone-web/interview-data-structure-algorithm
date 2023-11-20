// 手写lodash中的isEqual API

const isEqual = (obj1, obj2) => {
    // 传入的参数不是引用类型（值类型）
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

    // 传入的参数是同一个引用
    if (obj1 === obj2) {
        return true;
    }

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    // 传入的两个对象的属性个数不一致（一定不相等）
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    // 以obj1为基准，循环的比较obj1中的每个属性是否和obj2中的属性是否相等 
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key]); // 递归比较

        if (!res) {
            return false;
        }
        // return res; 这里不能直接这样写（不然不会循环比较）
    }

    // 全等
    return true;

}

const obj1 = {
    a: 100,
    b: {
        c: 200,
        d: 300
    }
}

const obj2 = {
    a: 100,
    b: {
        c: 20,
        d: 300
    }
}

const res = isEqual(obj1, obj2);

// console.log(res, 'res');
