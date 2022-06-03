<template>
  <div class="advantage-item">
    <img src="./images/Ellipse13.png" alt="#eror" class="advantage-item__img" />
    <h2 class="advantage-item__title">{{ content.title }}</h2>
    <p class="advantage-item__desc">{{ content.description }}</p>
  </div>
</template>

<script>
export default {
  name: "AdvantageItem",
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="sass" scoped>
.advantage-item
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

  &__title
    font-weight: 600
    font-size: 18px
    margin-top: 36px
    margin-bottom: 36px
</style>
