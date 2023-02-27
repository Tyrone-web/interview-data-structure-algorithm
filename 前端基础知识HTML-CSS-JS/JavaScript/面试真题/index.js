var a = 2;
function test() {
    a = 1;
    setTimeout(() => {
        console.log(this.a);
    }, 10);
    setTimeout(function () {
        console.log(this.a);
    }, 0);
}

test.bind({ a: 3 })();

const b = 'global';
function test1() {
    console.log(b, 'b1');

    if (false) {
        var b = 'local';
    }
    console.log(b, 'b2');
}

test1();