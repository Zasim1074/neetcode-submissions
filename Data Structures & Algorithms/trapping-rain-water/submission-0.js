class Solution {
    trap(height) {
        while ((height.length > 0 && height[0] === 0) || height[height.length - 1] === 0) {
            if (height[0] === 0) height.shift();
            if (height[height.length - 1] === 0) height.pop();
        }

        let left = 0,
            right = height.length-1,
            rightMax = 0,
            leftMax = 0,
            trappedWater = 0;

        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if (leftMax < rightMax) {
                trappedWater += leftMax - height[left];
                left++;
            } else {
                trappedWater += rightMax - height[right];
                right--;
            }
        }
        return trappedWater;
    }
}
