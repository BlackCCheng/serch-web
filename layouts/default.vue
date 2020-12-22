<template>
  <div>
    <top /> 
    <Nuxt />
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'
  import top from '~/components/common/top.vue'
  
  @Component({
    components: {
      top
    }
  })
  
  export default class App extends Vue {
    
    message: string = 'This is a message'

    get fullName (): string {
      return `123`
    }
  }


</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
