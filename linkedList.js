var a = {val: 'a', next: null};
var b = {val: 'b', next: null};
var c = {val: 'c', next: null};
var e = {val: 'e', next: null};

// 将a、b、c链接起来
a.next = b;
b.next = c;
c.next = e;

// 在链表中插入值
const d = {val: 'd'};
c.next = d;
d.next = e;

// 删除链表中的c项
b.next = d;

// 遍历列表
let point = a; // 定义指针
while (point) {
    console.log(point.val);
    point = point.next;
}
