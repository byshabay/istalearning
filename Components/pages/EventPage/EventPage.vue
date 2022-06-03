<template>
  <div class="ista-container event-page">
    <div class="event-page__wrap">
      <img src="./baikal.jpeg" alt="baikal" />
      <div>
        <h1 class="event-page__title">{{event.title}}</h1>
        <md-chip class="md-primary">Искусство</md-chip>
        <md-chip class="md-accent">160 минут</md-chip>

        <p class="md-display-1 event-page__subtitle">17 мая, 14:00</p>

        <p>
          {{event.description}}
        </p>

        <md-button @click="showSubscribeDialog = true" class="md-raised md-accent event-page__button">Записаться</md-button>

        <md-dialog :md-active.sync="showSubscribeDialog">
          <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
        </md-dialog>
      </div>
    </div>
    <p>
      Lorem ipsum sit amet,  consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum sit amet,  consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="event-page__author-wrap">
      <img src="./baikal.jpeg" alt="test" class="event-page__author-avatar" />
      <div>
        <h4>Иванов Иван Иванович</h4>
        <p>Lorem ipsum sit amet,  consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeFormMain from "~/components/SubscribeFormMain/SubscribeFormMain.vue";
export default {
  name: "EventPage",
  components: {SubscribeFormMain},

  data() {
    return {
      showSubscribeDialog: false,
      event: {}
    }
  },

  async mounted() {
    this.event = await this.$api.getEvents(this.$route.params.id)
  }
}
</script>

<style lang="sass" scoped>
.event-page
  margin-top: 35px

  &__wrap
    margin-bottom: 40px
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 20px

  &__title
    margin-bottom: 20px

  &__subtitle
    margin-top: 15px
    margin-bottom: 20px

  &__button
    margin-top: 20px
    margin-left: -4px

  &__author
    &-wrap
      margin-top: 40px
      display: flex
      justify-content: center
      align-items: center
    &-avatar
      margin-right: 60px
      width: 205px
      height: 205px
      border-radius: 50%
</style>
