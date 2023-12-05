const formatKey = (key) => key.replace(/_[a-z]/, (math) => {
    return math[1].toUpperCase();
});

const formatData = (data) => {
    if (typeof data !== 'object' || typeof data === null) {
        return data;
    }

    const res = data instanceof Array ? [] : {};

    for (const item in data) {
        const key = formatKey(item);
        res[key] = formatData(data[key]);
    }

    return res;
}

// console.log(formatKey('a_b'));

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }

    if (xhr.status === 200) {
        // 拿到结果
        xhr.responseText;
    } else {
        new Error(xhr.statusText);
    }
}

xhr.open('get', 'url', true);

xhr.send();
// pose请求
xhr.open('post', 'url', true);
xhr.setRequestHeader('content-type', 'application/x-www-urlencoded');
xhr.send('username=test');

// 使用Promise封装ajax
const ajax = (method, url, data) => {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            resolve(xhr.responseText)
        } else {
            reject(xhr.statusText)
        }

        if (method.toLowerCase() === 'get') {
            xhr.open('get', url);
            xhr.send();

            return;
        }

        xhr.open('post', url);
        xhr.setRequestHeader('Content-type', 'application/x-wwww-urlencoded');
        xhr.send();
    });
}