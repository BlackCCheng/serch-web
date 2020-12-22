<template>
  <div>
    {{ message }}
    123
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageIndex extends Vue {
  message: string = 'hello Typescript'
}
</script>
