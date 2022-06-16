<template>
  <div class="advantage-item">
    <img :src="require(`./images/${content.img}`)" alt=" #eror" class="advantage-item__img" />
    <h2 v-html=" $t(content.title) " class="advantage-item__title ">

    </h2>
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
  @import "~assets/sass/ui-kit/mixin"
.advantage-item
  display: flex
  flex-direction: column
  align-items: center
  max-width: 289px
  padding: 35px

  text-align: center

  &__title
    margin: 35px auto

    line-height: 150%
    font-family: 'Montserrat-SM'
    font-size: $text-18

    color: $dark-blue

  &__img
    width: 50px
    height: 50px
    object-fit: contain
  
  &__desc 
    font-family: 'Montserrat'
    font-size: $text-16
    line-height: 150%
    
    color: $dark-blue
@include laptop
  .advantage-item
    padding: 0px
</style>
