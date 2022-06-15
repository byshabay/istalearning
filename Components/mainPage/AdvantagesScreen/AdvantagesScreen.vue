<template>
  <div class="advantages-screen">
    <h2 class="advantages-screen__title common-h2">{{ $t('why')}}</h2>
    <div class="ista-container advantages-screen__wrap">
      <AdvantageItem v-for="(advantage, index) in advantages" :key="index" :content="advantage" />
    </div>
  </div>
</template>

<script>
import AdvantageItem from "~/Components/mainPage/AdvantagesScreen/AdvantageItem.vue";

export default {
  name: "AdvantagesScreen",
  components: {AdvantageItem},
  data() {
    return {

      advantages: [
        {
          img: "advantages-1.png",
          title: 'ad1',
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          img: "advantages-2.png",
          title: 'ad2',
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          img: "advantages-3.png",
          title: 'ad3',
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          img: "advantages-4.png",
          title: 'ad4',
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
      ],
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/sass/ui-kit/mixin"
.advantages-screen
  padding-top: 19px 
  padding-bottom: 35px

  &__title
    margin-bottom: 35px
    text-align: center

  &__wrap
    display: flex
    justify-content: space-between
    grid-gap: 30px
</style>
