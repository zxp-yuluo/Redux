# react-redux

> 一个官方维护的react插件库。
>
> 用于简化react应用中使用redux。

## react-redux 将所有的组件分为两大类

### UI组件

- 只负责UI的呈现，不带任何业务逻辑。
- 通过props接收数据(一般数据和函数)。
- 不适用任何Redux的API。
- 一般保存在components文件夹下。

### 容器组件

- 负责管理数据和业务逻辑，不负责UI呈现。
- 使用 Redux 的API。
- 一般保存在containers文件夹下。