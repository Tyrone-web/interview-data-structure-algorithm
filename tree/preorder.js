/**
 * 先序遍历二叉树
 * 算法口诀
 * 1、访问根节点
 * 2、对根节点的左子树进行先序遍历
 * 3、对根节点的右子树进行先序遍历
 */
const bt = require('./bt');

const preorder = root => {
    if (!root) {
        return;
    }

    console.log(root.val); // 1、访问根节点
    preorder(root.left); // 2、遍历根节点的左子树
    preorder(root.right); // 3、访问根节点的右子树
}

// preorder(bt);

// 非递归版
const copyInorder = root => {
    if (!root) {
        return;
    };

    const stack = [root];

    while (stack.length > 0) {
        const n = stack.pop();
        console.log(n.val);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }

}

copyInorder(bt);