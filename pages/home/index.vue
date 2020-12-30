<template>
  <div class="home">
    <div class="home-con"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageIndex extends Vue {
  message: string = 'hello Typescript'
}
</script>

<style lang="less" scope>
.home{
  display: flex;
  justify-content: center;
  .home-con{
    width: 1200px;
    height: auto;
    min-height: 200px;
    margin-top: 30px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  }
}
  
</style>
