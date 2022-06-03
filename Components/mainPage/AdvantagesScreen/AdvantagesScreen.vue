<template>
  <div class="advantages-screen">
    <h2 class="advantages-screen__title">Почему мы?</h2>
    <div class="ista-container advantages-screen__wrap">
      <AdvantageItem
        v-for="(advantage, index) in advantages"
        :key="index"
        :content="advantage"
      />
    </div>
  </div>
</template>

<script>
import AdvantageItem from "~/components/mainPage/AdvantagesScreen/AdvantageItem.vue";

export default {
  name: "AdvantagesScreen",
  components: {AdvantageItem},
  data() {
    return {
      advantages: [
        {
          title: "Первое отличное преимущество",
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          title: "Второе преимущество",
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          title: "Третье преимущество",
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
        {
          title: "Четвертое преимущество",
          description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
      ],
    }
  }
}
</script>

<style lang="sass" scoped>
.advantages-screen
  margin-top: 80px
  margin-bottom: 50px

  &__title
    margin-bottom: 35px
    text-align: center

  &__wrap
    display: flex
    justify-content: space-between
    grid-gap: 30px
</style>
