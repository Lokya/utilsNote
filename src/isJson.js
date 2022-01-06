/**
 * 简单判断是否是 json 字符串
 * @param {any} str json 字符串
 * @returns Boolean
 */
function isJSON(str) {
	if (typeof str === 'string') {
		try {
			const obj = JSON.parse(str);
			if (typeof obj === 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
}