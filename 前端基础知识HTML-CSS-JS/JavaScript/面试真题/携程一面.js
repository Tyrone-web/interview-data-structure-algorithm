// 携程（一面）

// 设计一个Node灰度分流的模块，需要具备哪些能力，把分流的代码写出来

// [config1 = {}, config2 = {}]，一个包含所有灰度规则的数组，每一项就是一个灰度规则，需要自己设计灰度规则coning = { }里有什么东西

const graySwitchConfigList = await getGraySwitchConfig();

const user = { uuid, userId };

const grayKey = "test1";

function getGrayStrategy(user, grayKey) {
    // ...

    return strategy // 'A' or 'B'
}

// 给出如下虚拟dom的数据结构，实现简单的虚拟dom，并渲染到目标真实dom上

// 样例数据
const demoNode = {
    tagName: 'ul',
    props: { 'class': 'list' },
    children: [
        ({ tagName: 'li', children: ['douyin'] }),
        ({ tagName: 'li', children: ['toutiao'] })
    ]
};

// 构建一个render函数，将demoNode对象渲染为以下dom
<ul class="list">
    <li>douyin</li>
    <li>toutiao</li>
</ul>

function Foo() {
    getName = function () { console.log(1); };
    return this;
}

Foo.getName = function () { console.log(2); };
Foo.prototype.getName = function () { console.log(3); };
var getName = function () { console.log(4); };
function getName() { console.log(5); };
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // error
getName(); // 4
new (Foo.getName)(); // 2
(new Foo()).getName(); // 3