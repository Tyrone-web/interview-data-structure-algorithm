const generateParentthesis = n => {
    // 思路：不停的选括号，要么选择左括号，要么选择右括号
    const res = [];

    const dfs = (l, r, str) => {
        if (str.length === 2 * n) { // 字符串构建完成
            res.push(str);
        }

        if (l > 0) { // 只要还有左括号，就可以选它，继续做递归选择
            dfs(l - 1, r, str + '(');
        }

        if (r > l) { // 右括号的数量大于左括号的数量，才能选有括号（否则构建的字符串不是有效的括号）
            dfs(l, r - 1, str + ')');
        }
    }

    dfs(n, n, '');

    return res;
}

console.log(generateParentthesis(2));