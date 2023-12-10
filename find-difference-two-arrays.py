from typing import List

class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1 = set(nums1)
        set2 = set(nums2)
        return [set1-set2, set2-set1]


s = Solution()
diff = s.findDifference([1, 2, 3], [2, 4, 6])
print(diff)
