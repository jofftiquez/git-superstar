<template lang="pug">
  v-app(:dark="getTheme()")#app
    router-view
    v-footer(fixed height="auto").pa-2
      v-layout(row)
        v-flex
          <a class="github-button mt-1" href="https://github.com/jofftiquez" data-size="large" data-show-count="true" aria-label="Follow @jofftiquez on GitHub">Follow @jofftiquez</a>
          <a class="github-button mt-1" href="https://github.com/jofftiquez/git-superstar" data-size="large" data-show-count="true" aria-label="Star jofftiquez/git-superstar on GitHub">Star</a>
          strong.mt-1.right Made with ❤️by 
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
