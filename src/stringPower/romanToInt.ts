export interface RomanMap {
  [key: string]: number;
}
/**
 * 罗马数字转阿拉伯数字
 * @param s 需要进行转换的罗马数字字符串
 * @returns 罗马数字字符串的阿拉伯数字
 *
 * @example
 * 输入: s = "LVIII"
 * romanToInt(s) // 58
 * 输出: 58
 * 解释: L = 50, V= 5, III = 3.
 */
export default function romanToInt(s: string): number {
  const romanMap: RomanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const constants: RomanMap = {
    IV: 2, //1+5-4
    IX: 2, //1+10-9
    XL: 20, //10+50-40
    XC: 20, //10+50-40
    CD: 200, //100+500-400
    CM: 200, //100+1000-900
  };
  let result = s.split("").reduce((init, next) => {
    init = init + romanMap[next];
    return init;
  }, 0);
  Object.keys(constants).forEach((key) => {
    if (s.includes(key)) {
      result = result - constants[key];
    }
  });
  return result;
}
