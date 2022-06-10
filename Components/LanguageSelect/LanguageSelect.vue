<template>
  <md-menu md-size="auto" md-align-trigger>
    <md-button md-menu-trigger class="md-dense">

      <img :src="require(`./images/${langActive}pick.png`)" alt="rus">
    </md-button>

    <md-menu-content>
      <md-menu-item v-for="item in langMapping" :key="item" @click="langChange(item)">
        <!-- <md-menu-item v-for="item in langMapping" :key="item" @click="langActive = item"> -->
        <img :src="require(`./images/${item}pick.png`)" :alt="item">
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
export default {
  name: "LanguageSelect",
  
  data() {
    return {
      langMapping: ['ru', 'en', 'fr', 'ger'],     
      langActive: 'ru',
      init() {
        this.langActive = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'ru'
      }
    }
  }, 
  mounted() {
    this.init()
  },
  methods: {
    langChange(lang) {
      this.langActive = lang
      sessionStorage.setItem('lang', `${lang}`);
      location.reload();
    },
  },
 
 
}
</script>

<style scoped>

</style>
