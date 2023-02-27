// 归并排序
/**
 * 归并排序思路
 * 1、分：把数组分成两半，递归的对子数组进行分操作，直到分成一个个单独的数
 * 2、合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组
 */

Array.prototype.mergeSort = function () {
    const rec = arr => {
        if (arr.length === 1) {
            return arr;
        }
        // 分
        const mid = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, mid);
        const rightArray = arr.slice(mid);
        const orderLeft = rec(leftArray);
        const orderRight = rec(rightArray);

        // 合
        const res = [];
        while (orderLeft?.length || orderRight?.length) {
            if (orderLeft?.length && orderRight?.length) {
                const item = orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift();
                res.push(item);
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else {
                res.push(orderRight.shift());
            }
        }

        return res;
    }

    const res = rec(this);
    res?.forEach((item, index) => this[index] = item);
}

// const arr = [5, 4, 3, 2, 1];
// arr.mergeSort()

// console.log(arr);

const mergeSort = arr => {
    const rec = (array) => {
        if (array.length === 1) {
            return array;
        }
        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);
        const orderLeft = rec(left);
        const orderRight = rec(right);

        const res = [];
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                const item = orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift();
                res.push(item);
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else {
                res.push(orderRight.shift());
            }
        }

        return res;
    }

    return rec(arr);
}

const testArr = [5, 2, 3, 1, 4];

console.log(mergeSort(testArr));