<template>
  <md-dialog :md-active.sync="showSubscribeDialog">
    <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
  </md-dialog>
</template>

<script>
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";

export default {
  name: "SubscribeFormMainFormatDialog",
  components: {SubscribeFormMain},
  props: {
  },

  data() {
    return {
      showSubscribeDialog: true
    }
  }
}
</script>

<style scoped>

</style>
