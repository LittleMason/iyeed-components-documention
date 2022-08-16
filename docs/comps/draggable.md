# Draggable

可拖拽组件

## 示例

::: demo 适用首页动效

```html
<template>
  <div>
    <iyeed-draggable
      :title="dialogDragInfo.title"
      :visible.sync="visible"
      :width="dialogDragInfo.width"
      :bt-list="dialogDragInfo.btList"
      :list="draggableList"
      :show-close="false"
      @handleClick="handleClick"
    />
    <el-button @click="show">显示</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        draggableList: [],
        dialogDragInfo: {
          title: "自定义列",
          btList: [
            {
              label: '关闭',
              type: "",
              icon: "",
              event: "closeZhqcDragPop",
              show: true,
            },
            {
              label: '保存',
              type: "primary",
              icon: "",
              event: "saveZhqcDragItem",
              btLoading: false,
              show: true,
            },
          ],
        },
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      handleClick() {
        this.visible = false;
      },
    },
  };
</script>
```

:::
