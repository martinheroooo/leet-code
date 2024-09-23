function findAnagrams(s: string, p: string): number[] {
  const need = new Map();
  const window = new Map();

  for (const str of p) {
    need.set(str, (need.get(str) || 0) + 1);
  }

  let left = 0,
    right = 0;
  let valid = 0;
  const res: number[] = [];
  while (right < s.length) {
    const c = s[right];
    right++;
    /**
     * 更新移动窗口数据
     */
    if (need.get(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (need.get(c) === window.get(c)) {
        valid++;
      }
    }
    /**
     * 判断窗口是否要收缩
     */
    while (right - left + 1 > p.length) {
      if (valid === need.size) {
        res.push(left);
      }

      const d = s[left];
      left++;

      if (need.get(d)) {
        if (need.get(d) === window.get(d)) {
          valid--;
        }
        window.set(d, (window.get(d) || 0) - 1);
      }
    }
  }
  return res;
}
