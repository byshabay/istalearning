<template>
<div class="ista-container events-screen">
  <h2 class="events-screen__title">Популярные мероприятия</h2>
  <md-tabs class="events-screen__tabs" @md-changed="test">
    <md-tab id="tab-home" md-label="Онлайн-экскурсии"></md-tab>
    <md-tab id="tab-pages" md-label="Родительский клуб"></md-tab>
    <md-tab id="tab-posts" md-label="Вебинары"></md-tab>
  </md-tabs>
  <SsrCarousel v-if="events.length" :slides-per-page="3" show-arrows show-dots paginate-by-slide :key="tab">
    <EventCard @showSubscribeDialog="showSubscribeDialog = true" v-for="(eventContent, index) in events" :key="index" :content="eventContent"/>
  </SsrCarousel>

  <md-dialog :md-active.sync="showSubscribeDialog">
    <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
  </md-dialog>
</div>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import EventCard from "~/components/events/EventCard/EventCard.vue";
import SubscribeFormMain from "~/components/SubscribeFormMain/SubscribeFormMain.vue";

export default {
  name: "EventsScreen",
  components: {EventCard, SsrCarousel, SubscribeFormMain},

  data() {
    return {
      showSubscribeDialog: false,
      tab: 'tab-home',
      count: 2,
      events: []
    }
  },

  methods: {
    async getEvents(cat) {
      this.events = await this.$api.getEvents(`?cat=${cat}`)
    },

    async test(e) {

      if (!e) return
      const mapping = {
        'tab-home': 1,
        'tab-pages': 2,
        'tab-posts': 3
      }
      await this.getEvents(mapping[e])
      this.tab = e
    }
  }
}
</script>

<style lang="sass">
.ssr-carousel-back-button
  left: -6%

.ssr-carousel-next-button
  right: -6%
</style>

<style lang="sass" scoped>
.events-screen
  margin-top: 80px

  &__title
    margin-bottom: 35px
    text-align: center

  &__tabs
    margin-bottom: 15px
</style>
