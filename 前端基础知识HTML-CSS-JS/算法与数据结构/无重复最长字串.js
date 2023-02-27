// s = "abcabcbb" => 3

const lengthOfLongestSubstring = str => {
    const len = str.length;
    let res = 0;
    let left = 0;

    const map = new Map();

    for (let i = 0; i < len; i++) {
        const item = str[i];
        if (map.has(item) && map.get(item) >= left) {
            left = map.get(item) + 1;
        }

        map.set(item, i);
        res = Math.max(res, i - left + 1);
    }

    return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"))