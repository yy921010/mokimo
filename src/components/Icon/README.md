# MoIcon
> MoIcon component.

## 基本用法
### 安装
```javascript
// 全局引入
import mokimo from 'mokimo'
Vue.use(mokimo)

// 局部引入
import {MoIcon} from 'mokimo'
Vue.use(MoIcon)
```
### 使用

```html
<mo-icon :name="iconName" :type="iconType" :size="20"></mo-icon>
```
### prop

| 参数 | 类型   | 备注     | 参数类型                      |
| ---- | ------ | -------- | ----------------------------- |
| name | string | 按钮名字 | [参照](https://remixicon.com) |
| type | string | 类型     | fill\|line                    |
| size | number | 按钮大小 | 14                            |

