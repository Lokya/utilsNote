/**
 *  判断输入数据的类型
 * @param {any} input 输入数据
 * @returns 返回类型
 */
function type(input) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
}
