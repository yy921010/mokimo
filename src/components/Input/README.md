# MoInput
> MoInput component.

## 基本用法
### 安装
```javascript
// 全局引入
import mokimo from 'mokimo'
Vue.use(mokimo)

// 局部引入
import {MoInput} from 'mokimo'
Vue.use(MoInput)
```
### 使用

```html
<mo-input type="search" :isError="false" placeholder="默认设置" v-model="input1"></mo-input>

<mo-input :isError="false" placeholder="默认设置" v-model="input2" nativeType="password"></mo-input>
```
### prop

| 参数        | 类型    |
| ----------- | ------- |
| nativeType  | string  |
| tabindex    | string  |
| maxlength   | number  |
| type        | string  |
| placeholder | string  |
| readonly    | boolean |

