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
import FirstScreen from "~/Components/mainPage/FirstScreen/FirstScreen.vue";
import CatalogScreen from "~/Components/mainPage/CatalogScreen/CatalogScreen.vue";
import AdvantagesScreen from "~/Components/mainPage/AdvantagesScreen/AdvantagesScreen.vue";
import ConsultationScreen from "~/Components/mainPage/ConsultationScreen/ConsultationScreen.vue";
import EventsScreen from "~/Components/mainPage/EventsScreen/EventsScreen.vue";

export default {
  name: "MainPage",
  components: {EventsScreen, ConsultationScreen, AdvantagesScreen, CatalogScreen, FirstScreen}
}
</script>

<style scoped>

</style>
