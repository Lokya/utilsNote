# utilsNote
📝 用来做一些日常的工具方法记录

## 开个仓库记录下日常写的、看到的工具函数方法

### 1、判断类型

```javascript
function type(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
}
```

### 2、简单判断是否是json

```javascript
function isJSON(str) {
  if (typeof str === 'string') {1
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