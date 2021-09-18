/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 * 1.排序
 * 2.双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    let l = 0,
        r = 0;
    const result = []
    while(l < nums1.length && r < nums2.length) {
        if(nums1[l] === nums2[r]) {
            console.log(l,r)
            result.push(nums1[l])
            l++;
            r++;
        } else if(nums1[l] < nums2[r]) {
            l++;
        }else {
            r++;
        }
    }
    return result
};