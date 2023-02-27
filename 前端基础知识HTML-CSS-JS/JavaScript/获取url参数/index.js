// 1、location.search + 正则表达式 实现
const getUrlParams = key => {
    const search = location.search.substring(1);
    // a=2&b=3&c=4
    const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
    const res = search.match(reg);

    if (res === null) {
        return null;
    }

    return res[2];
}


// 2、URLSeachParams对象实现
const getUrlParams2 = key => {
    const search = location.search;
    const p = new URLSearchParams(search);

    return p.get(key);
}

// 将url参数解析为JS对象
const getUrlParamsToObj = () => {
    const res = [];

    const pList = new URLSearchParams(location.search);

    pList.forEach((val, key) => res[key] = val);

    return res;
}
// 解析URL Params为对象
let testUrl =
    "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
// parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
const getParamsFromUrl = url => {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 找到？后的请求参数
    console.log(paramsStr, 'paramsStr');
    const paramsArr = paramsStr.split('&');
    const res = {};

    paramsArr.forEach(item => {
        if (/=/.test(item)) {
            let [key, value] = item.split('=');
            value = decodeURIComponent(value);
            value = /^\d+$/.test(value) ? parseFloat(value) : value;
            if (res.hasOwnProperty(key)) {
                res[key] = [].concat(res[key], value);
            } else {
                res[key] = value;
            }
        } else {
            res[item] = true;
        }
    });

    return res;
}

console.log(getParamsFromUrl(testUrl));

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// }

// for (var i = 0; i < 3; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 100);
//     })(i);
// }
