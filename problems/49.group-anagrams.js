/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (51.78%)
 * Likes:    2407
 * Dislikes: 140
 * Total Accepted:    465K
 * Total Submissions: 898K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 *
 */
const _ = require('lodash')

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  return Object.values(
    _.groupBy(strs, str => _.orderBy(str.split('')).join(''))
  )
}
// @lc code=end

const { checkUnordered } = require('../test/utils')

module.exports = {
  ignore: true,
  fn: groupAnagrams,
  cases: [
    {
      in: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
      out: checkUnordered([['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']]),
    },
  ],
}
