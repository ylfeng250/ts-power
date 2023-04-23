/**
 * 查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * @param strs 传入的数组字符串
 * @returns 返回数组字符串的最长公共子串
 *
 * @example
 * const strs = ["flower","flow","flight"];
 * const res = findLongSetCommonPrefix(strs); // 'fl'
 */
export default function findLongSetCommonPrefix(strs: string[]): string {
  let result = "";
  if (!strs.length) return result;
  for (let j = 0; j < strs[0].length; j++) {
    //第j位
    for (let i = 1; i < strs.length; i++) {
      //第i个
      if (strs[i][j] != strs[0][j]) return result;
    }
    result += strs[0][j];
  }
  return result;
}
