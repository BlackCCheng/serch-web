<!--
 * @Author: your name
 * @Date: 2020-12-23 10:09:46
 * @LastEditTime: 2020-12-30 15:45:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /serch-web/components/common/top.vue
-->
<template>
    <div>{{message}}</div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Home extends Vue {
        
    message: string = 'header'
    
    }

</script>

<style lang="less" scoped>

</style>
