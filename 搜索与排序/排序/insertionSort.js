/**
 * 插入排序思路
 * 1、从第二项开始往前比
 * 2、前面比当前项大的就往后排
 * 3、以此类推进行到最后一项
 */

Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        const temple = this[i];
        let j = i;

        while (j > 0) {
            if (this[j - 1] > temple) {
                this[j] = this[j - 1];
            } else {
                break;
            }

            j--;
        }

        this[j] = temple;
    }
}

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        const temple = arr[i];
        let j = i;

        while (j > 0) {
            if (arr[j - 1] > temple) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
            j--;
        }

        arr[j] = temple;
    }

    return arr;
}

const arr = [5, 4, 3, 2, 1];
arr.insertionSort()

// console.log(arr);
console.log(insertionSort(arr));
