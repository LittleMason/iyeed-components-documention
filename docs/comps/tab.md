# Tab

Tab 切换组件

## 示例

::: demo 适用 tab 页面切换

```html
<template>
  <iyeed-tab :tabs="fieldList" v-model="activeName">
    <div slot="po">
      PO----Content
    </div>
    <div slot="bu">
      BU----Content
    </div>
  </iyeed-tab>
</template>

<script>
  export default {
    data() {
      return {
        activeName:'po',
        formData: {
          //表单绑定的数据Model
          po: null,
          bu: null,
        },
        fieldList: [
          { label: "PO", value: "po" },
          { label: "BU", value: "bu" },
        ],
      };
    },
  };
</script>
```

:::
