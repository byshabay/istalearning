<template>
  <div class="events-screen">
    <div class="ista-container">
      <h2 class="events-screen__title common-h2">Популярные мероприятия</h2>
      <md-tabs class="events-screen__tabs" @md-changed="test">
        <md-tab id="tab-home" md-label="Онлайн-экскурсии"></md-tab>
        <md-tab id="tab-pages" md-label="Родительский клуб"></md-tab>
        <md-tab id="tab-posts" md-label="Вебинары"></md-tab>
      </md-tabs>
      <SsrCarousel v-if="events.length" :slides-per-page="3" show-arrows show-dots paginate-by-slide :key="tab">
        <EventCard @showSubscribeDialog="showSubscribeDialog = true" v-for="(eventContent, index) in events"
          :key="index" :content="eventContent" />
      </SsrCarousel>

      <md-dialog :md-active.sync="showSubscribeDialog">
        <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
      </md-dialog>
    </div>
  </div>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";
import EventCard from "~/Components/events/EventCard/EventCard.vue";
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";

export default {
  name: "EventsScreen",
  components: { EventCard, SsrCarousel, SubscribeFormMain },

  data() {
    return {
      showSubscribeDialog: false,
      tab: "tab-home",
      count: 2,
      events: [],
    };
  },

  methods: {
    async getEvents(cat) {
      this.events = await this.$api.getEvents(`?cat=${cat}`);
    },

    async test(e) {
      if (!e) return;
      const mapping = {
        "tab-home": 1,
        "tab-pages": 2,
        "tab-posts": 3,
      };
      await this.getEvents(mapping[e]);
      this.tab = e;
    },
  },
};
</script>

<style lang="sass">
  @import "~assets/sass/ui-kit/mixin"
.ssr-carousel-back-button
  left: 0

.ssr-carousel-next-button
  right: 0

.ssr-carousel-slides
  padding: 0 60px

.ssr-carousel-dots 
  margin: 0
  padding: 19px 0

.md-tabs.md-theme-default 
  .md-tabs-navigation 
    font-family: 'Montserrat'
    font-size: $text-16

    .md-button.md-active
      color: $main-blue

      
    .md-tabs-indicator
      background-color: $main-blue

.md-card.md-with-hover
  &:hover
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2)

.ssr-carousel-dot-button
  .ssr-carousel-dot-icon
    background-color: #49189E
    border: 0px

.md-card-media.md-ratio-1-1
    &:before
      position: absolute
      background-color: $dark-blue
      opacity: 0.2
      z-index: 1
      // padding: 0
    
    img 
      position: relative
      display: block
      width: 100%
      max-height: 249px
      height: 259px
      object-fit: cover
      z-index: 0

      transform: none

.md-card-media-cover .md-card-actions .md-button:not(.md-primary):not(.md-accent),
.md-card-media-cover .md-card-actions .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon,
.md-card-media-cover .md-card-header .md-button:not(.md-primary):not(.md-accent),
.md-card-media-cover .md-card-header .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon
  color: $dark-blue !important

.md-card-media-cover
  color: $dark-blue !important
  &.md-solid 
    .md-card-area
      position: relative

      background-color: #E9F2F9 !important

.md-card 
  .md-card-header 
    span
      font-family: 'Montserrat-SM'
      font-size: $text-16
      line-height: 150%

    .md-subhead
      font-family: 'Montserrat'

   

    .md-price
      color: #730FC2
      margin-top: 19px

    .event-wrap 
      height: 50px
    

  
      
</style>

<style lang="sass" scoped>
  @import "~assets/sass/ui-kit/mixin"
.events-screen
  padding-top: 35px
  
  background-color: #fff

  &__title
    margin-bottom: 35px
    text-align: center

  &__tabs
    margin-bottom: 15px


</style>
