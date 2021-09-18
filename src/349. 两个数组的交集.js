/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const set = new Set(nums2)
    const result = new Set()
    for(let i =0; i < nums1.length; i++ ) {
        if(set.has(nums1[i])) {
            result.add(nums1[i])
        }
    }
    return Array.from(result)
};