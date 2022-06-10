<template>
  <div class="ista-container events-screen">
    <!-- <md-tabs class="events-screen__tabs" @md-changed="test">
      <md-tab id="tab-home" md-label="Онлайн-экскурсии"></md-tab>
      <md-tab id="tab-pages" md-label="Родительский клуб"></md-tab>
      <md-tab id="tab-posts" md-label="Вебинары"></md-tab>
    </md-tabs> -->
    <ul>
      <li>
        <EventCard @showSubscribeDialog="showSubscribeDialog = true" v-for="(eventContent, index) in events"
          :key="index" :content="eventContent" />

      </li>
    </ul>


    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>

  </div>
</template>

<script>
import axios from "axios";
import EventCard from "~/Components/events/EventCard/EventCard.vue";
import FilterEvents from "~/Components/events/FilterEvents/FilterEvents.vue";
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";

export default {
  name: "excursions",
  components: { FilterEvents, EventCard, SubscribeFormMain },
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

    // async test(e) {
    //   if (!e) return;
    //   const mapping = {
    //     "tab-home": 1,
    //     "tab-pages": 2,
    //     "tab-posts": 3,
    //   };
    //   await this.getEvents(mapping[e]);
    //   this.tab = e;
    // },
  },
  mounted () {
    this.getEvents(1)
  }
};
</script>

<style lang="sass" scoped>
.test
  margin-top: 50px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 20px
</style>
