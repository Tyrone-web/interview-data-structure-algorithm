/**
 * 后序遍历二叉树
 * 算法口诀
 * 1、访问根节点的左子树
 * 2、访问根节点的右子树
 * 3、访问根节点
 */
const bt = require('./bt');

const postorder = root => {
    if (!root) return;

    postorder(root.left); // 1、访问根节点的左子树
    postorder(root.right); // 2、访问根节点的右子树
    console.log(root.val); // 3、访问根节点
}

postorder(bt);
console.log('--------------');

// 非递归版
const copyPostOrder = root => {
    if (!root) {
        return;
    }

    const outputStack = [];
    const stack = [root];

    while (stack.length > 0) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}

copyPostOrder(bt);