class Solution {
  productExceptSelf(nums) {
    const result = [];

    let lp = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] = lp;
      lp *= nums[i];
    }

    let rp = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
      result[j] *= rp;
      rp *= nums[j]

    }
    return result;
  }
}
