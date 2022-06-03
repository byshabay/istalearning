<template>
  <div class="ista-container first-screen">
    <div class="promo_clip-main">
      <h1>{{event.title}}</h1>
      <p>
        {{event.description}}
      </p>
      <md-button @click="showSubscribeDialog = true" class="md-raised md-accent first-screen__button">Записаться</md-button>

    </div>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/YxmYj4-DxpI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>
  </div>
</template>

<script>
import SubscribeFormMain from "~/components/SubscribeFormMain/SubscribeFormMain.vue";
export default {
  name: "FirstScreen",
  components: {SubscribeFormMain},
  data() {
    return {
      showSubscribeDialog: false,
      event: {}
    }
  },

  async mounted() {
    this.event = await this.$api.getEvents(`14`)
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
