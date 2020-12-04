function majorityElement (nums) {
    const countMap = {}
    nums.forEach(num => {
        if (countMap[num]) {
            countMap[num]++
        } else {
            countMap[num] = 1
        }
    })

    let maxTimes = 0
    let maxTimesNum = null
    Object.keys(countMap).forEach(num => {
        // 找出最大的出现次数
        if (countMap[num] > maxTimes) {
            maxTimes = countMap[num]
            maxTimesNum = Number(num)
        }
    })

    return maxTimesNum
};