class Solution {
    threeSum(nums) {
        const sarr = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sarr.length - 2; i++) {
            if (i > 0 && sarr[i] === sarr[i - 1]) continue;

            let left = i + 1,
                right = sarr.length - 1;

            while (left < right) {
                const sum = sarr[i] + sarr[left] + sarr[right];

                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    result.push([sarr[i], sarr[left], sarr[right]]);
                    left++;
                    right--;

                    while (left < right && sarr[left] === sarr[left - 1]) left++;
                    while (left < right && sarr[right] === sarr[right + 1]) right--;
                }
            }
        }
        return result;
    }
}
