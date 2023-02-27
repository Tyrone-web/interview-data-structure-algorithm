
const isValidate = str => {
    if (!str) {
        return false;
    }
    const temple = [];
    // 方式一
    // const map = {
    //     '}': '{',
    //     ')': '(',
    //     ']': '['
    // }

    // for (const item of str) {
    //     if (!map[item]) {
    //         temple.push(item); // {([
    //     } else if (temple[temple.length - 1] === map[item]) {
    //         temple.pop();
    //     } else {
    //         return false;
    //     }
    // }
    // 方式二
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (const item of str) {
        if (item === '(' || item === '[' || item === '{') {
            temple.push(item);
        } else {
            const key = temple.pop();
            if (item !== map[key]) {
                return false;
            }
        }
    }

    return temple.length === 0;
}

var str = '{([])}'; // true
console.log(isValidate(str));
var str = '{([)}'; // false
console.log(isValidate(str));
var str = '[]'; // true
console.log(isValidate(str));
var str = '}'; // false
console.log(isValidate(str));
