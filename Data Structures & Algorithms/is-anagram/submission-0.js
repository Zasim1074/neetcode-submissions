class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const seen = new Map();

        for (let num of s) {
            seen.set(num, (seen.get(num) || 0) + 1);
        }

        for (let num of t) {
            if (!seen.has(num) || seen.get(num) === 0) {
                return false;
            } else {
                seen.set(num, seen.get(num) - 1);
            }
        }

        return true;
    }
}
