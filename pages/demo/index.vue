<!--
 * @Author: Xiaom
 * @Date: 2020-12-22 17:10:56
 * @LastEditTime: 2020-12-30 15:40:46
 * @LastEditors: Xiaom
 * @Description: In User Settings Edit
 * @FilePath: /serch-web/pages/demo/index.vue
-->
<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  message: string = 'hello Typescript2'
}

</script>
