/**
 * 中序遍历二叉树
 * 算法口诀
 * 1、对根节点的左子树进行中序遍历
 * 2、访问根节点
 * 3、对根节点的右子树进行中序遍历
 */
const bt = require('./bt');

const inorder = root => {
    if (!root) {
        return;
    }

    inorder(root.left); // 1、对根节点左子树进行中序遍历
    console.log(root.val); // 2、访问根节点
    inorder(root.right); // 3、对根节点右子树进行中序遍历
}

inorder(bt);

console.log('----------------')

// 非递归版
const copyInorder = root => {
    if (!root) {
        return;
    }

    const stack = [];
    let p = root;

    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }

        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}

copyInorder(bt);