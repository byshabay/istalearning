<template>
  <div class="ista-container events-screen">
    <div class="page-container">
      <!-- <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-toolbar>

      <md-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <MetaFilter @setFilters="setFilter" :content="metaContent" />


          <div>

            <div class="filter__title ">Цена</div>
            </div>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
        </md-list>
      </md-drawer> -->

      <md-content class="events-screen__wrapper">
        <EventCard @showSubscribeDialog="showSubscribeDialog = true" v-for="(eventContent, index) in events"
          :key="index" :content="eventContent" />
      </md-content>

    </div>
    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>



  </div>
</template>

<script>
import MetaFilter from "~/Components/events/FilterEvents/MetaFilter.vue";
import axios from "axios";
import EventCard from "~/Components/events/EventCard/EventCard.vue";
import FilterEvents from "~/Components/events/FilterEvents/FilterEvents.vue";
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";

export default {
  name: "excursions",
  components: { MetaFilter,FilterEvents, EventCard, SubscribeFormMain },
  data() {
    return {
      showSubscribeDialog: false,
      tab: "tab-home",
      count: 2,
      events: [],
      menuVisible: false,
      metaContent: [],
      selectedFilters: [],
      arrFilter: ''
    };
  },

  methods: {
    setFilter(data) {
      
      this.selectedFilters = data.filters
      this.arrFilter = ''

      this.selectedFilters.forEach((value, index) => {
        this.arrFilter = this.arrFilter + '&meta=' + value.id
        console.log(this.arrFilter);
        // console.log(index);
      })

      this.getEvents(1, this.arrFilter)
    },
    async getEvents(cat, arrFilter) {
      this.events = await this.$api.getEvents(`?cat=${cat}&is_published=true${arrFilter}`);
      this.metaContent = await this.$api.catMetaData(`?cat=${cat}`);

    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }

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
  @import "~assets/sass/ui-kit/mixin"
.events-screen 
  margin-bottom: 20px
  &__wrapper
    margin-top: 50px
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 20px


.test
  margin-top: 50px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 20px
</style>
