<template>
  <div style="height: 2000px;">
    <FirstScreen />
    <CatalogScreen />
    <AdvantagesScreen />
    <ConsultationScreen />
    <EventsScreen />
  </div>
</template>

<script>
import FirstScreen from "~/components/mainPage/FirstScreen/FirstScreen.vue";
import CatalogScreen from "~/components/mainPage/CatalogScreen/CatalogScreen.vue";
import AdvantagesScreen from "~/components/mainPage/AdvantagesScreen/AdvantagesScreen.vue";
import ConsultationScreen from "~/components/mainPage/ConsultationScreen/ConsultationScreen.vue";
import EventsScreen from "~/components/mainPage/EventsScreen/EventsScreen.vue";

export default {
  name: "MainPage",
  components: {EventsScreen, ConsultationScreen, AdvantagesScreen, CatalogScreen, FirstScreen}
}
</script>

<style scoped>

</style>
