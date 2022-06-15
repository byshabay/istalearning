<template>
  <div>
    <FirstScreen />
    <CatalogScreen />
    <AdvantagesScreen />
    <EventsScreen />
    <ConsultationScreen />
    <CertificatesScreen />
    <ReviewsScreen />

  </div>
</template>

<script>
import FirstScreen from "~/Components/mainPage/FirstScreen/FirstScreen.vue";
import CatalogScreen from "~/Components/mainPage/CatalogScreen/CatalogScreen.vue";
import AdvantagesScreen from "~/Components/mainPage/AdvantagesScreen/AdvantagesScreen.vue";
import ConsultationScreen from "~/Components/mainPage/ConsultationScreen/ConsultationScreen.vue";
import EventsScreen from "~/Components/mainPage/EventsScreen/EventsScreen.vue";
import CertificatesScreen from "~/Components/mainPage/CertificatesScreen/CertificatesScreen.vue";
import ReviewsScreen from "../../mainPage/ReviewsScreen/ReviewsScreen.vue";

export default {
  name: "MainPage",
  components: { EventsScreen, ConsultationScreen, AdvantagesScreen, CatalogScreen, FirstScreen, CertificatesScreen, ReviewsScreen }
}
</script>

<style scoped>

</style>
