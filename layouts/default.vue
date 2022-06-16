<template>
  <div class="page">

    <MainHeader />
    <Nuxt />
    <div class="page-footer">
      <MainFooter />
    </div>


  </div>
</template>

<script>
import MainFooter from "~/Components/footer/MainFooter.vue";
import MainHeader from "~/Components/headers/MainHeader/MainHeader.vue";

export default {
  name: 'DefaultLayout',
  components: {MainHeader, MainFooter}
}
</script>

<style lang="sass">


</style>
