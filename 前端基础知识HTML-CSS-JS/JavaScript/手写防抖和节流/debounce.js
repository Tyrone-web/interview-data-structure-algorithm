/**
 * 防抖：响应函数（回调函数）在一段时间后执行，如果在这段时间内再次触发响应函数则重新计时
 */
const debounce = (fn, delay = 500) => {
    let timer = null;

    return function () { // 这里不使用箭头函数是为了保存当前上下文this
        if (timer) {
            clearTimeout(timer); // 清楚定时器，定时器中的函数不会执行
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null; // 释放闭包避免内存泄漏
        }, delay)
        // timer = setTimeout(function () {
        //     console.log(this, 222);
        //     console.log(context === this, 'result');
        //     fn.apply(this, arguments);
        //     timer = null; // 释放闭包避免内存泄漏
        // }, delay)
    }
}

const fn = (a) => {
    console.log(a)
}

const test = debounce(fn, 2000);
test(1);

// export default debounce;

const obj = {
    a: 1,
    b: () => {
        console.log(this, 1111);
    },
    bb: function () {
        console.log(this, 333);
    },
    c: () => {
        setTimeout(() => {
            console.log(this, 2222);
        }, 1000);
    },
    cc: function () {
        setTimeout(() => {
            console.log(this, 4444);
        }, 1000);
    }
}
obj.b();
obj.bb();
obj.c();
obj.cc();
