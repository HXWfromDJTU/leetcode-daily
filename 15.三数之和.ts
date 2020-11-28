/**
 * ① 排序  ② 遍历开头，双指针夹逼  ③ 三者向前推去重  ④ 保存结果  ⑤ 指针向中间推进
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const resArr = []

    // ① 将数组处理为有序数组
    nums.sort((a, b) => {
        return a - b
    })

    // ② 遍历取得起始点，双指针夹逼遍历所有情况
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break;  // 因为有序，所以起始值必须小等于零，否则后面肯定不成功，此处为优化项目

        if(i > 0 && nums[i] == nums[i-1]) continue; // ③ 去重

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            // 三者之和
            const currTotal = nums[left] + nums[right] + nums[i]

            if (currTotal > 0) {
                right--
            } else if (currTotal < 0) {
                left++
            } else {
                // ④ 记录结果
                resArr.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ])

                while (nums[left] === nums[left + 1] && left < right) left++ // ③ 去重
                while (nums[right] === nums[right - 1] && left < right) right-- // ③ 去重

                // ⑤ 利用数组的有序行，左右指针持续向中间靠拢
                right--
                left++
            }
        }
    }

    return resArr
};