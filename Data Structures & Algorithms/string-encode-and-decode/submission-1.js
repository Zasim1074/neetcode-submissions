class Solution {
    encode(strs) {
        let s = "";
        for (let i = 0; i < strs.length; i++) {
            s += strs[i].length + "#" + strs[i];
        }
        return s;
    }

    decode(str) {
        const arr = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const len = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + len);
            arr.push(word);
            i = j + 1 + len;
        }
        return arr;
    }
}
