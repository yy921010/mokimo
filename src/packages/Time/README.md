# MoTime
> MoTime component.

## 基本用法
### 安装
```javascript
// 全局引入
import mokimo from 'mokimo'
Vue.use(mokimo)

// 局部引入
import {MoTime} from 'mokimo'
Vue.use(MoTime)
```
### 使用

```html
    <mo-time :date="new Date()"></mo-time>
```
### prop

| 参数        | 类型    |
| ----------- | ------- |
| date  | Date  |