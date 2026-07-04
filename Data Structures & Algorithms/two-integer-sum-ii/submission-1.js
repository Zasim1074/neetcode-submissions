class Solution {
    twoSum(numbers, target) {
        const reminder = new Map();

        for (let i = 0; i < numbers.length; i++) {
            if (reminder.has( numbers[i]) && reminder.get(numbers[i]) !== numbers[i]) {
                return [numbers.indexOf(reminder.get(numbers[i]))+1, numbers.indexOf(numbers[i])+1];
            }

            reminder.set(target - numbers[i], numbers[i]);
        }
        return [];
    }
}
