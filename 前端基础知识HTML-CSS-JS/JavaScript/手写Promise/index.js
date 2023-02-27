
class MyPromise {
    state = 'pending'; // Promise的三种状态 pending/fulfilled/rejected
    value = undefined; // 成功后的值
    reason = undefined; // 失败的原因
    resolveCallbacks = []; // pending状态下，存储成功后的回调
    rejectCallbacks = []; // pending状态下，存储失败的回调

    constructor(fn) {
        const resolveHandler = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;

                this.resolveCallbacks.forEach(fn => fn(this.value));
            }
        }

        const rejectedHandler = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;

                this.rejectCallbacks.forEach(fn => fn(this.reason));
            }
        }

        try {
            fn(resolveHandler, rejectedHandler);
        } catch (error) {
            rejectedHandler(error);
        }
    }

    then(fn1, fn2) {
        fn1 === typeof fn1 === 'function' ? fn1 : v => v;
        fn2 === typeof fn2 === 'function' ? fn2 : e => e;

        if (this.state === 'pending') {
            const p = new MyPromise((resovle, reject) => {
                this.resolveCallbacks.push(() => {
                    try {
                        const newValue = fn1(this.value);
                        resovle(newValue);
                    } catch (err) {
                        reject(err);
                    }
                });

                this.rejectCallbacks.push(() => {
                    try {
                        const newValue = fn2(this.error);
                        resolve(newValue);
                    } catch (err) {
                        reject(err);
                    }
                })
            })

            return p;
        }

        if (this.state === 'fulfilled') {
            const p = new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn1(this.value);
                    resolve(newValue);
                } catch (err) {
                    reject(err);
                }
            });

            return p;
        }

        if (this.state === 'rejected') {
            const p = new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn2(this.error);
                    resolve(newValue);
                } catch (err) {
                    reject(err);
                }
            });

            return p;
        }

    }

    catch(fn) {
        this.then(null, fn); // null 小细节
    }

}

// 静态方法
MyPromise.resolve = value => {
    return new MyPromise((resolve, reject) => {
        resolve(value);
    });
}

MyPromise.reject = error => {
    return new MyPromise((resolve, reject) => {
        reject(error);
    });
}

MyPromise.all = (promiseList = []) => {
    const p = new MyPromise((resolve, reject) => {
        const result = []; // 保存promiseList中的的值
        const length = promiseList.length;
        let resolveCount = 0;

        promiseList.forEach(p => {
            p.then(data => {
                result.push(data);

                resolveCount++;
                // 注意这里不能使用 index === lenght做判断 index的值是同步的
                if (resolveCount === length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        });

    });

    return p;
}

MyPromise.race = (promiseList = []) => {
    const p = new MyPromise((resolve, reject) => {
        let resolved = false; //是否执行
        promiseList.forEach(p => {
            p.then(data => {
                if (!resolved) {
                    resolve(data);
                    resolved = true;
                }
            }).catch(err => {
                reject(err);
            })
        })
    });

    return p;
}


const p1 = new MyPromise((resolve, rejected) => {
    resolve(100);
});

const p2 = new MyPromise((resolve, rejected) => {
    rejected('errors')
});

const p3 = new MyPromise((resolve, rejected) => {
    setTimeout(() => {
        resolve(100);
    }, 1000);
});

const p4 = MyPromise.resolve(100);
const p5 = MyPromise.resolve(200);

// const res1 = MyPromise.race([p3, p4, p5]);
const res2 = MyPromise.all([p3, p4, p5]);
// res2.then(data => console.log(data, 'data'));
// console.log(res1, 'res1');
// console.log(res2, 'res2');

const div = document.getElementById('div1');
console.log(div, 'div');

div.addEventListener('click', function () {
    console.log(this, 'this1');
});

div.addEventListener('click', () => {
    console.log(this, 'this2');
});
