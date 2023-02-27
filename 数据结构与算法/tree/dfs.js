/**
 * 深度优先遍历: 尽可能深的搜素树的分支
 * 遍历过程分为两步：
 * 1、访问根节点
 * 2、对根节点的子节点（children）挨个进行深度优先遍历
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

const dfs = (root) => {
    console.log(root.val);

    root.children.forEach(dfs); // 递归
}

const dfs1 = root => {
    console.log(root.val);

    root.children.forEach(dfs);
}

dfs(tree);