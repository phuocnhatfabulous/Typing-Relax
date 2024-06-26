'''
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
'''
from typing import List

class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    n = len(nums)
    for i in range(n - 1):
      for j in range(i + 1, n):
        if nums[i] + nums[j] == target:
          return [i, j]
    return []  # No solution found
  
nums = [2,7,11,15,3,5,4]
target = 26
solution = Solution()
result = solution.twoSum(nums, target)
if result:
  print("Result is: " + str(result))
else:
  print("No solution found")