class Solution {
    maxArea(heights) {
        let maxWater = 0,
            left = 0,
            right = heights.length - 1;

        while (left < right) {
            const water = (right - left) * Math.min(heights[right], heights[left]);

            maxWater = water > maxWater ? water : maxWater;
            heights[right] > heights[left] ? left++ : right--;
        }
        return maxWater;
    }
}
