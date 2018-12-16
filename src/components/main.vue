<template lang="pug">
  div.mb-1
    v-toolbar
      v-toolbar-title Git Superstar!
      v-spacer
      v-btn(href="https://github.com/jofftiquez/git-superstar/" target="_blank" flat) Github
    v-progress-linear(v-if="loading" :indeterminate="true" height="4" style="margin: 0;")
    v-container
      v-layout(row justify-center)
        v-flex(xs12 md8)
          h1(align="center").white--text Count your Github stars!
          form(@submit.prevent="submit")
            v-layout(row).pl-1
              v-text-field(v-model="username" solo label="Github username..." required :disabled="loading")
              v-btn(type="submit" large style="margin-top: 1px;" :disabled="loading") Count!
      v-layout(row justify-center).mb-3
        v-flex(xs12 md8).pa-1
          v-card
            v-card-text.text-xs-center
              h1 
                v-icon star
                v-icon.md-star star
                v-icon.lg-star star
                span.starsTotal.yellow--text {{starsTotal}}
                v-icon.lg-star star
                v-icon.md-star star
                v-icon star
              div(v-if="starsTotal")
                h1.yellow--text 🎊🎉 {{topRepos[0].name}} 🎊🎉
                h2 Top Repository
      v-layout(row justify-center).mb-3
        v-flex(xs12 md8)
          v-layout(row wrap)
            v-flex(v-if="totalOwned").pa-1
              v-card
                v-card-text.text-xs-center
                  h1 {{totalOwned}}
                  h2 Total Owned
            v-flex(v-if="totalForked").pa-1
              v-card
                v-card-text.text-xs-center
                  h1 {{totalForked}}
                  h2 Total Forked
      v-layout(row justify-center).mb-3
        v-flex(xs12 md8).pa-1
          v-card(v-if="topRepos.length")
            v-card-text
              v-list(two-line)
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      strong Repository
                      strong.right.yellow--text Star Count
                v-divider
                v-list-tile(v-for="(repo, key) in topRepos" :key="key" @click="")
                  v-list-tile-avatar
                    img(:src="repo.owner.avatar_url")
                  v-list-tile-content
                    v-list-tile-title {{repo.name}}
                      span.right.yellow--text {{repo.stargazers_count}}
                    v-list-tile-sub-title {{repo.description}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data() {
      return {
        loading: false,
        username: ''
      }
    },
    computed: {
      ...mapGetters({
        starsTotal: 'stars/starsTotal',
        topRepos: 'stars/topRepos',
        totalForked: 'stars/totalForked',
        totalOwned: 'stars/totalOwned',
      })
    },
    methods: {
      ...mapActions({
        getStars: 'stars/getStars',
      }),
      async submit() {
        try {
          this.loading = true;
          await this.getStars(this.username);
          this.loading = false;
        } catch (e) {
          console.error(e);
          this.loading = false;
        }
      }
    }
  }
</script>

<style scoped>
  .starsTotal {
    font-size: 70px !important;
  }

  .md-star {
    font-size: 40px !important;
  }
  
  .lg-star {
    font-size: 60px !important;
  }
</style>

