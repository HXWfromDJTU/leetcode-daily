/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map()

    nums.forEach((num, index) => {
        numsMap.set(num, index)
    })

    for(let i = 0; i < nums.length; i++) {
        const surplus = target - nums[i]

        if (numsMap.has(surplus) && i !== numsMap.get(surplus)) {
            return [i, numsMap.get(surplus)]
        }
    }
    return false
};