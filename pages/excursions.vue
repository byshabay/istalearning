<template>
  <div>
    <FilterEvents class="ista-container" />
    <div class="ista-container test">
  <EventCard />
  <EventCard />
  <EventCard />
  <EventCard />
  <EventCard />
  <EventCard />
  <EventCard />
  <EventCard />
</div>
  </div>
</template>

<script>
import EventCard from "~/components/events/EventCard/EventCard.vue";
import FilterEvents from "~/components/events/FilterEvents/FilterEvents.vue";
export default {
  name: "excursions",
  components: {FilterEvents, EventCard}
}
</script>

<style lang="sass" scoped>
.test
  margin-top: 50px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 20px
</style>
