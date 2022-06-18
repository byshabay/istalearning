<template>
  <div class="block catalog-screen">
    <h2 class="catalog-screen__title common-h2"> {{ $t('catalog')}}</h2>
    <div class="ista-container catalog-screen__wrap">
      <a href="/excursions" class="catalog-screen__item center">
        <img src="./images/Rectangle47.png" alt="#eror" class="catalog-screen__img catalog-screen__img-1" />
        <p class="catalog-screen__font">{{ $t('excursionsOnline')}}</p>
      </a>
      <a href="#" class="catalog-screen__item center">
        <img src="./images/birds.png" alt="#eror" class="catalog-screen__img catalog-screen__img-2" />
        <p class="catalog-screen__font">{{ $t('parents')}} </p>
      </a>
      <a href="#" class="catalog-screen__item center">
        <img src="./images/Flags.png" alt="#eror" class="catalog-screen__img catalog-screen__img-3" />
        <p class="catalog-screen__font">{{ $t('lang')}} </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogScreen"
}
</script>

<style lang="sass" scoped>
   @import "~assets/sass/ui-kit/mixin"
.catalog-screen
  padding: 35px 0 70px
  
  background-color: #fff
  &__title
    margin-bottom: 35px 
    text-align: center

  &__wrap
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 10px
  &__item
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    padding: 35px 0

    max-height: 326px

    background-color: #cbe2ef

    &:hover .catalog-screen__img, .catalog-screen__font
      transform: scale(1.1)

  &__img
    max-height: 240px
    min-height: 240px
    max-width: 348px
    width: 100%
    height: 100%
    object-fit: contain
    

    transition: 1s

  &__img-1 
    // max-height: 198px
    max-width: 201px

  // &__img-2
  //   max-height: 230px

  &__img-2
    max-width: 257px

  &__font
    font-family: 'Montserrat'
    font-size: $text-32
    text-align: center
    line-height: 150%

    transition: 1s
    color: $dark-blue
  
@include laptop
  .catalog-screen

    &__img,
    &__img-1,
    &__img-2 
      width: 70%
      min-height: 180px
      max-height: 180px
    &__item
      padding: 19px 0
    
    &__font
      font-size: $text-18

@include tablet
  .catalog-screen
    padding: 19px 0px 19px

    &__title
      margin-bottom: 19px

    &__img,
    &__img-1,
    &__img-2 
      width: 50%
      min-height: 50px
      max-height: 100px

    

</style>
