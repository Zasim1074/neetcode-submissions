class Solution {
    groupAnagrams(strs) {
        const arr = [];
        const anagrams = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split("").sort().join("");
            
            if(!anagrams.has(sortedStr)){
                anagrams.set(sortedStr, []);
            }

            anagrams.get(sortedStr).push(strs[i]);
        }

       return Array.from(anagrams.values());
    }
}
