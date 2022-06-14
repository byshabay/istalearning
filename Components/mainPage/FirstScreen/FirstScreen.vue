<template>
  <div class="ista-container first-screen">
    <div class="promo_clip-main" v-for="(eventContent, index) in event" :key="index">
      <h1 class="first-screen__promo_h1">{{eventContent.title}}</h1>
      <p class="first-screen__promo_p">
        {{eventContent.description}}
      </p>
      <md-button @click="showSubscribeDialog = true" class="md-raised md-accent btn-grad  first-screen__btn">Записаться
      </md-button>

    </div>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/YxmYj4-DxpI?controls=0"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>
  </div>
</template>

<script>
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";
export default {
  name: "FirstScreen",
  components: {SubscribeFormMain},
  data() {
    return {
      showSubscribeDialog: false,
      event: [
      
      ]
    }
  },

  async mounted() {
    this.event = await this.$api.getEvents(`?is_promo=true`)
  },

  methods: {
    testRoute() {
      this.$router.push('/contacts')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/sass/ui-kit/mixin"
.first-screen
  margin-top: 60px
  display: flex
  justify-content: space-between

  &__btn
    margin-top: 40px
    margin-left: 0
    padding: 4px 26px
  
  .promo_clip-main 
    width: 50%
    font-family: 'Montserrat'
    color: $main-blue

  iframe 
    width: 40%
    min-height: 317px
    
  &__promo_h1 
    font-size: $text-48
  
  &__promo_p
    font-size: $text-16
    line-height: 150%
    margin-top: 35px

    
</style>
