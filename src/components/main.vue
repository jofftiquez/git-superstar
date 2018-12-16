<template lang="pug">
  div.mb-1
    v-toolbar
      v-toolbar-title Git Superstar!
      v-spacer
      v-btn(href="https://github.com/jofftiquez/git-superstar/" target="_blank" flat) Visit Github
      v-btn(@click="logOut" v-if="user" flat) Log out
    v-progress-linear(v-if="loading" :indeterminate="true" height="4" style="margin: 0;")
    v-container
      //- TITLE
      v-layout(row)
        v-flex
          h1(align="center").white--text Count your github stars!
          br

      //- LOGIN
      v-layout(row justify-center align-center v-if="!user")
        v-flex(xs12 md4)
          v-btn(large block @click="authWithGithub") 
            img(width="20" src="../assets/images/github-logo.png")
            | &nbsp;Login with Github

      //- SEARCH
      v-layout(row justify-center v-else)
        v-flex(xs12 md8)
          form(@submit.prevent="submit")
            v-layout(row).pl-1
              v-text-field(v-model="username" solo label="Github username..." required :disabled="loading")
              v-btn(type="submit" large style="margin-top: 1px;" :disabled="loading") Count!
      
      //- RESULT STARS
      v-layout(row justify-center v-if="topRepos.length && user").mb-3
        v-flex(xs12 md8).pa-1
          v-card
            v-card-text.text-xs-center
              h1 
                v-icon star
                v-icon.md-star star
                v-icon.lg-star star
                span.stars-total.yellow--text {{starsTotal}}
                v-icon.lg-star star
                v-icon.md-star star
                v-icon star
              div(v-if="starsTotal")
                h1.yellow--text 🎊🎉 {{topRepos[0].name}} 🎊🎉
                h2 Top Repository

      //- ANALYTICS
      v-layout(row justify-center).mb-3
        v-flex(xs12 md8)
          v-layout(row wrap)
            v-flex(v-if="totalOwned && user").pa-1
              v-card
                v-card-text.text-xs-center
                  h1 {{totalOwned}}
                  h4 Total Owned
            v-flex(v-if="totalForked && user").pa-1
              v-card
                v-card-text.text-xs-center
                  h1 {{totalForked}}
                  h4 Total Forked

      //- REPO LIST
      v-layout(row justify-center).mb-3
        v-flex(xs12 md8).pa-1
          v-card(v-if="topRepos.length && user")
            v-card-text
              v-list(two-line)
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      strong Repository
                      strong.right.yellow--text Star Count
                v-divider
                v-list-tile(v-for="(repo, key) in topRepos" :key="key" @click="visit(repo)")
                  v-list-tile-avatar
                    img(:src="repo.owner.avatar_url")
                  v-list-tile-content
                    v-list-tile-title {{repo.name}}
                      span.right.yellow--text {{repo.stargazers_count}}
                    v-list-tile-sub-title {{repo.description}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { auth } from '../firebase/exports';
  export default {
    async created() {
      this.username = this.$route.params.username || '';
      if(this.username && this.user)
        await this.submit();
    },
    data() {
      return {
        loading: false,
        username: ''
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        token: 'auth/token',
        starsTotal: 'stars/starsTotal',
        topRepos: 'stars/topRepos',
        totalForked: 'stars/totalForked',
        totalOwned: 'stars/totalOwned',
      })
    },
    methods: {
      ...mapActions({
        getStars: 'stars/getStars',
        authWithGithub: 'auth/authWithGithub',
        signOut: 'auth/signOut'
      }),
      async submit() {
        try {
          this.loading = true;
          const { username, token } = this;
          await this.getStars({username, token});
          this.loading = false;
        } catch (e) {
          console.error(e);
          this.loading = false;
        }
      },
      visit(repo) {
        let link = '';
        if(repo.homepage) 
          link = repo.homepage;
        else
          link = repo.html_url;
        window.open(link);
      },
      async logOut() {
        await this.signOut();
        this.username = '';
      }
    }
  }
</script>

<style scoped>
  .stars-total {
    font-size: 80px !important;
  }

  .md-star {
    font-size: 40px !important;
  }
  
  .lg-star {
    font-size: 60px !important;
  }
</style>

