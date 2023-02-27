// 快速排序
/**
 * 快速排序思路
 * 1、分区：从要排序的数组中任意去一个“基准”，所有比基准小的元素放在基准前面，比基准大的放在基准后面
 * 2、递归的对基准前后的子数组进行分区操作
 * 3、返回排序好的数组
 */

Array.prototype.quikSort = function () {
    const rec = arr => {
        // 递归出口
        if (arr?.length === 1 || arr.length === 0) {
            return arr;
        }
        // 分区+合并
        const left = [];
        const right = [];
        const middle = arr[0];

        // 分区
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < middle) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        // 合并
        return [...rec(left), middle, ...rec(right)];
    }

    const res = rec(this);
    res.forEach((item, index) => this[index] = item);
}

const arr = [5, 4, 3, 2, 1];
arr.quikSort()

// console.log(arr);

const copyQuikSort = arr => {
    if (arr.length === 1 || arr.length === 0) {
        return arr;
    }
    const middle = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...copyQuikSort(left), middle, ...copyQuikSort(right)];
}

const testArr = [1, 3, 2, 5, 4];
const res = copyQuikSort(testArr);

console.log(res)