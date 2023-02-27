// 顺序搜索
Array.prototype.sequentialSearch = function (target) {
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (item === target) {
            return i;
        }
    }

    return -1;
}

const arr = [1, 2, 5];

console.log(arr.sequentialSearch(2));