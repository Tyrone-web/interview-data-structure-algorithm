/**
 * 节流：持续的触发响应事件，每隔一段时间只执行一次响应事件。缩减响应函数的执行频率
 */
const throttle = (fn, delay) => {
    let timer = null;

    return function () {
        if (timer) {
            return; // 虽然该函数终止了但是定时器中的函数任然会执行
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

// 利用时间搓实现
const throttle2 = (fn, delay = 100) => {
    let oldTime = 0;

    return function () {
        const nowTime = new Date().getTime();


        if (nowTime - oldTime > delay) {
            fn.apply(this, arguments);

            oldTime = nowTime;
        }
    }
}