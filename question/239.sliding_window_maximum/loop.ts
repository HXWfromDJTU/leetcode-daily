// 使用 Queue 双端队列
function maxSlidingWindow(nums: number[], k: number): number[] {
    const resArr: number[] = []
    const slideWinIndexs: number[] = [] // 使用滑动窗口，始终不直接操作传入的数组  (slideWinIndexs长度始终小于等于 k 值)

    for (let i = 0; i < nums.length; i ++) {
        // 使用 i 与 slideWinIndex[0] 作为双指针
        if (i - slideWinIndexs[0] >=k) {
            slideWinIndexs.shift() // 淘汰掉头元素的指针
        }

        // 删除队列中小于等于新元素的数字(下标)
        while (nums[slideWinIndexs[slideWinIndexs.length - 1]] <= nums[i]) {
            slideWinIndexs.pop()
        }

        // 添加新元素下标
        slideWinIndexs.push(i)

        // 排除前 k - 1 个结果
        if (i >= k-1) {
            // 活动窗口下标中，始终保持最左边的即为最大值
            resArr.push(nums[slideWinIndexs[0]])
        }
        
    }
    
    return resArr
  };