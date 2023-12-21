/**
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


*/

function lengthOfLongestSubstring(s: string): number {
    let r = 0;
    let l = 0;
    let maxLen = 0;
    const window = new Map();
    while (r < s.length) {
        const rightStr = s[r];
        window[rightStr]
            ? (window[rightStr] = window[rightStr] + 1)
            : (window[rightStr] = 1);

        while (window[rightStr] > 1) {
            const leftStr = s[l];
            l++;
            window[leftStr] = window[leftStr] - 1;
        }
        r++;
        maxLen = Math.max(r - l, maxLen);
    }
    return maxLen;
}
