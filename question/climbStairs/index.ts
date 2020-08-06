// solve 2
/**
 * @param {number} n
 * @return {number}
 */
const climbStair = function(n:number) {
    // c 为从当前楼梯倒数两级楼梯，走到当前楼梯的走法数目
   let a = 0, b = 1 ,count = 0
   while(n--) {
       count = a + b
       a = b
       b = count
   }
   return count
}