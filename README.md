# utilsNote
ð ç¨æ¥åä¸äºæ¥å¸¸çå·¥å·æ¹æ³è®°å½

## å¼ä¸ªä»åºè®°å½ä¸æ¥å¸¸åçãçå°çå·¥å·å½æ°æ¹æ³

### 1ãå¤æ­ç±»å

```javascript
function type(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
}
```

### 2ãç®åå¤æ­æ¯å¦æ¯json

```javascript
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
```