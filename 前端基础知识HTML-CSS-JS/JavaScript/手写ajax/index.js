// 手写ajax请求
/**
 * 1、创建XMLHttpRequrest请求
 * 2、设置状态回调函数
 * 3、规定请求类型、URL以及是否异步请求
 * 4、将请求发送到服务器
 */

const xhr = new XMLHttpRequest(); // 步骤1
// 步骤2
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }

    if (xhr.status === 200) {
        console.log(xhr.responseText);
    } else {
        new Error(xhr.statusText);
    }
}
// 步骤3
xhr.open('get', 'url', true);
// 步骤4
xhr.send();
// 如果是post请求则需要设置请求头
xhr.open('post', 'url', true);
xhr.setRequestHeader('Content-type', 'application/x-www-urlencoded'); // 以键值对的方式将数据发送到后端
xhr.send('username=test&password=123456');

// 使用Promise封装ajax

const ajax = (method, url, data) => {
    const xhr = XMLHttpRequest();
    return new Promise((resolve, reject) => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }

        if (method.toLowerCase() === 'get') {
            xhr.open('get', url);
            xhr.send();

            return;
        }

        xhr.open('post', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-urlencoded');
        xhr.send(data);
    });
}