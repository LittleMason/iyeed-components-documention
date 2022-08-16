# Draggable

可拖拽组件

## 示例


::: demo 适用首页动效
```html
<template>
  <div>
    <iyeed-draggable 
    :visible="visible"
    @handleClick="handleClick"
    />
    <el-button @click="show">显示</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible:false
      }
    },
    methods:{
        show(){
            this.visible = true
        },
        handleClick(){
            this.visible = false
        }
    }
  }
</script>
```
:::