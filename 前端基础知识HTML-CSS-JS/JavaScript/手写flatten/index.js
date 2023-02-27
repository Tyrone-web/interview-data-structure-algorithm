
// 扁平化数组考虑多层级
const flatten = arr => {
    const isDeep = arr.some(item => item instanceof Array);

    if (!isDeep) {
        return arr;
    }

    const res = Array.prototype.concat.apply([], arr); // concat具备扁平化一层级的能力
    return flatten(res); // 递归多层级
}
const arr = [1, 2, [3, 4, [10, 11]], 5];
// reduce 实现
const copyFlaten = arr => {
    const res = arr.reduce((acc, item) => {
        if (item instanceof Array) {
            return acc.concat(copyFlaten(item));
        }

        acc.push(item);
        return acc;
    }, []);

    return res;
}

console.log(copyFlaten(arr));

// 实现数组的flaten
const arrFlaten = arr => {
    const isDeep = arr.some(item => item instanceof Array);

    if (!isDeep) {
        return arr;
    }

    const res = Array.prototype.concat.call([], ...arr);

    return arrFlaten(res);
}