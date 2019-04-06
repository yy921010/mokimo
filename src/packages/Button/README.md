# MoButton
> MoButton component.

## 基本用法
### 安装
```javascript
// 全局引入
import mokimo from 'mokimo'
Vue.use(mokimo)

// 局部引入
import {Button} from 'mokimo'
Vue.use(Button)
```
### 使用

```html
<mo-button>default</mo-button>
<h2>禁用状态</h2>
<mo-button disable>default</mo-button>
<h2>图标状态</h2>
<mo-button iconName="search" iconType="fill">default</mo-button>
```
### prop

| 参数       | 类型    | 备注         | 参数类型                               |
| ---------- | ------- | ------------ | -------------------------------------- |
| type       | string  | 按钮类型     | ''\|primary\|large\|small\|mini\|ghost |
| nativeType | string  | 原生按钮类型 | 'button'\| 'reset'\|'submit'           |
| disable    | boolean | 是否禁用     | false                                  |
| iconName   | string  | 按钮图标     | [参照](https://remixicon.com)          |
| iconType   | string  | 按钮类型     | fill\|line                             |

