<template>
  <div>
    <MainHeader />
    <Nuxt />
<!--      <MainFooter />-->
  </div>
</template>

<script>
import MainHeader from "~/components/headers/MainHeader/MainHeader.vue";

export default {
  name: 'DefaultLayout',
  components: {MainHeader}
}
</script>
