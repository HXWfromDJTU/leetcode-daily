/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.39%)
 * Total Accepted:    61.1K
 * Total Submissions: 188.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return '';
    var firstStr = strs[0];       
    var len = firstStr.length;       
    // 先取较长的字符串，逐级缩短。       
    for(var i=len;i>0;i--){
         var tmpStr = firstStr.substring(0,i);
         var reg = new RegExp('^'+tmpStr); // 模拟startWith    
         var result =  strs.every(function(str){
               return reg.test(str);
         });
         if(result){
             return tmpStr;
         }
    }
    return '';
};

