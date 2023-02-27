// 选择排序

Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i;
        // 拿到数组中最小值的下标值
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            // 根据下标值替换
            const temple = this[indexMin];
            this[indexMin] = this[i];
            this[i] = temple;
        }
    }
}

const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // const temple = arr[minIndex];
        // arr[minIndex] = arr[i];
        // arr[i] = temple;
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }

    return arr;
}

const arr = [5, 4, 3, 2, 1];
arr.selectionSort()

// console.log(arr);
console.log(selectionSort(arr));
