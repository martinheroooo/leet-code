function groupAnagrams(strs: string[]): string[][] {
    const map = {} as { string: string[] };
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (map[sortedStr]) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    }
    return Object.values(map);
}
