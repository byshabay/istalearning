<template>
  <div class="ista-container first-screen">
    <div class="promo_clip-main" v-for="(eventContent, index) in event" :key="index">
      <div class="first-screen__text">
        <h1 class="first-screen__promo_h1">{{eventContent.title}}</h1>
        <p class="first-screen__promo_p">
          {{eventContent.description}}
        </p>
      </div>
      <md-button @click="showSubscribeDialog = true" class="md-raised md-accent btn-grad  first-screen__btn">
        {{$t('recording')}}
      </md-button>

    </div>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/YxmYj4-DxpI?controls=0"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" v-for="(eventContent, index) in event"
        :content="eventContent" :key="index" />
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
  padding-bottom: 70px
  display: flex
  justify-content: space-between

  &__btn
    margin-top: 40px
    margin-left: 0
    padding: 4px 26px
    z-index: 3 !important
  
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
@include desktopMin
  .first-screen
    align-items: center
    iframe 
      min-height: 300px 
      max-height: 317px 
@include tablet
  .first-screen
    margin-top: 19px
    padding-bottom: 19px
    flex-direction: column
    &__text
      width: 100%
    &__btn 
      width: 30%
      margin: 19px auto
    &__h1
      text-align: center
    &__promo_p
      margin-top: 19px 
    .promo_clip-main
      width: 100%
      text-align: center
    iframe 
      width: 100%


    
</style>
