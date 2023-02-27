
const myTrim = str => {
    str.replace(/^\s+|\s+$/gm, '');
}

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 1000);
    })
}
const foo = async () => {
    try {
        await fn();
    } catch (e) {
        console.log('lala', e);  // some error
    }
}
foo();