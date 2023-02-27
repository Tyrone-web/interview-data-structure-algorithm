// 深度遍历JSON的所有节点值

const json = {
    a: { b: { c: 1 } },
    d: [1, 2]
}


const dfs = n => {
    console.log(n);
    Object.keys(key => {
        dfs(n[key]);
    });
}

dfs(json);