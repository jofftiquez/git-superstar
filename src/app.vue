<template lang="pug">
  v-app(:dark="getTheme()")#app
    router-view
    v-footer(fixed)
      v-layout(row)
        v-flex.pa-2
          span.right Made with ❤️by 
            a(href="https://twitter.com/jrtiquez" target="_blank") @jrtiquez
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    getTheme() {
      return this.theme === 'dark' ? true : false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
