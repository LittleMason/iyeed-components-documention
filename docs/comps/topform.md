# TopForm

与table 关联的预置表单组件

## 示例


::: demo 适用首页动效
```html
<template>
  <iyeed-topform 
  :field-list="fieldList"
  :data="formData"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {//表单绑定的数据Model
          title:null,
          content:null
        },
        fieldList:[
            {label: 'PO', value: "title", type: "input"},
            {label: 'BU', value: "content", type: "input"}
        ]
      }
    }
  }
</script>
```
:::