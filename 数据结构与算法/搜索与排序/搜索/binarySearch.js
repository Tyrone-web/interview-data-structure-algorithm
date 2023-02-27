// 二分搜索/查找(只是对有序数组有效)
/**
 * 二分搜索思路
 * 1、从数组中间元素开始，如果中间元素正好是目标值，则搜索结束直接返回中间元素的下标值
 * 2、如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中进行搜索
 */
Array.prototype.binarySearch = function (target) {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (this[middle] < target) {
            low = middle + 1;
        } else if (this[middle] > target) {
            high = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5];

// console.log(arr.binarySearch(4));

const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middleIndex = Math.floor((low + high) / 2);
        if (arr[middleIndex] > target) {
            high = middleIndex - 1;
        } else if (arr[middleIndex] < target) {
            low = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

const testArr = [1, 2, 3, 4, 5];

console.log(binarySearch(testArr, 5));