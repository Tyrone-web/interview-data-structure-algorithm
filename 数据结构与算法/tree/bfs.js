/**
 * 广度优先遍历：先访问离根节点最近的节点
 * 遍历步骤如下：
 * 1、新建一个队列，并将根节点插入队列中
 * 2、队头出队并访问
 * 3、将队头的子节点（children）挨个入队
 * 4、重复二三步骤
 */
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

const bfs = root => {
    const queen = [root]; // 1、新建一个队列并将根节点放在队列中

    while (queen.length > 0) {
        const head = queen.shift(); // 2、队头出队
        console.log(head.val); // 3、访问队头的值

        // 4、将队头的子节点放在队列中
        head.children.forEach(item => {
            queen.push(item);
        });
    }
}

const bfs1 = root => {
    const queen = [root];

    while (queen.length) {
        const head = queen.shift();
        console.log(head.val);

        head.children.forEach(item => {
            queen.push(item);
        });
    }
}

bfs(tree);