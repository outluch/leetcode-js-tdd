/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.95%)
 * Likes:    13072
 * Dislikes: 471
 * Total Accepted:    2.5M
 * Total Submissions: 5.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    hash.set(target - n, i)
    if (hash.has(n)) return [hash.get(n), i]
  }
}
// @lc code=end

module.exports = {
  fn: twoSum,
  cases: [
    { in: [[2, 7, 11, 15], 9], out: [0, 1] },
    { in: [[11, 2, 15, 7], 9], out: [1, 3] },
  ],
}
