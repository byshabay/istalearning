<template>
  <div class="ista-container first-screen">
    <div class="promo_clip-main" v-for="(eventContent, index) in event" :key="index">
      <h1>{{eventContent.title}}</h1>
      <p>
        {{eventContent.description}}
      </p>
      <md-button @click="showSubscribeDialog = true" class="md-raised md-accent first-screen__button">Записаться
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
.first-screen
  margin-top: 60px
  display: grid
  grid-template-columns: 60% 40%
  grid-gap: 60px

  &__button
    margin-top: 20px
    margin-left: 0
</style>
