<template>
  <div class="consultation-screen">
    <div class="ista-container consultation-screen__wrap">
      <h2 class="consultation-screen__h2 common-h2">Записаться на консультацию</h2>
      <p class="consult-p consultation-screen__p">
        Пройдите анкетирование и запишитесь на 15-минутную консультацию с
        преподавателем
      </p>
      <md-button @click="showSubscribeDialog = true" class="consultation-screen__btn btn-grad">Записаться
      </md-button>
    </div>

    <md-dialog :md-active.sync="showSubscribeDialog">
      <SubscribeFormMain @sendSubscribeSuccess="showSubscribeDialog = false" />
    </md-dialog>
  </div>
</template>

<script>
import SubscribeFormMain from "~/Components/SubscribeFormMain/SubscribeFormMain.vue";
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
  @import "~assets/sass/ui-kit/mixin"
.consultation-screen
  padding: 35px 0

  font-family: 'Montserrat'

  background: $main-blue
  color: #fff

  &__wrap
    display: flex
    justify-content: space-between
    align-items: center

  &__h2 
    width: 30%

    color: #fff

  &__p 
    max-width: 408px
    width: 40%

    font-size: $text-18
  
  &__btn.btn-grad 
    color: $dark-blue
    background: #fff

</style>
