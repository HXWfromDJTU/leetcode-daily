/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (51.33%)
 * Likes:    1138
 * Dislikes: 0
 * Total Accepted:    262.3K
 * Total Submissions: 479.2K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意：你不能在买入股票前卖出股票。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */

/**
 * 基本方法
 * 时间复杂度 O(n) 因为有遍历
 * 空间复杂度 O(1) 没有新开空间
 */
function maxProfit(prices: number[]): number {
    // 当可操作性日小于2的时候，没有利润可图
    if (prices.length < 2) return 0


    /**
     * 注意这里有一个误区
     * 一定不能够 去找所有天数中的最低价格 和 最高价格之差，然后粗暴的判断是否符合“先买后卖”
     * 而是假定当天就是卖出的日子(只有一次卖出机会)，计算当天卖出时的利润，并和往日最高利润相比较
     * 最后得到的才是最高利润
     */
    let maxProfitVal = 0
    let minPrice = Infinity
    
    prices.forEach(todayPrice => {
        // 更新最低价格
        minPrice = Math.min(minPrice, todayPrice)

        // 每天都去看看，今天卖出是否能够获得比之前 最大的收益还要更多
        maxProfitVal = Math.max(maxProfitVal, todayPrice - minPrice)

        /**
         * 这里要注意，因为每次的操作的都是基于 todayPrice 更新的 minPrice
         * maxProfitVal也是基于最新的 minPrice
         * 所以不存在先卖后买的问题
         */
    })

    return maxProfitVal
};
// @lc code=end

