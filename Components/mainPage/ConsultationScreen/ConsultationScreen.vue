<template>
  <div class="consultation-screen">
    <div class="ista-container consultation-screen__wrap">
      <h2>Записаться на консультацию</h2>
      <p class="consult-p">
        Пройдите анкетирование и запишитесь на 15-минутную консультацию с
        преподавателем
      </p>
      <md-button @click="showSubscribeDialog = true" style="width: 120px;" class="md-raised">Записаться</md-button>
    </div>

    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>
  </div>
</template>

<script>
import SubscribeFormMain from "~/components/SubscribeFormMain/SubscribeFormMain.vue";
export default {
  name: "ConsultationScreen",
  components: {SubscribeFormMain},
  data() {
    return {
      showSubscribeDialog: false
    }
  }
}
</script>

<style lang="sass" scoped>
.consultation-screen
  padding-top: 74px
  padding-bottom: 74px
  background: #003C84
  color: #fff

  &__wrap
    display: flex
    justify-content: space-between
    align-items: center
</style>
