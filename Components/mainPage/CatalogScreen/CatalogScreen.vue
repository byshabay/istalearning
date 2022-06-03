<template>
  <div class="block catalog-screen">
    <h2 class="catalog-screen__title">Каталог</h2>
    <div class="ista-container catalog-screen__wrap">
      <a href="#" class="catalog-screen__item center">
        <img src="./images/Rectangle47.png" alt="#eror" class="catalog-screen__img" />
        <p class="catalog-screen__font">Экскурсии-онлайн</p>
      </a>
      <a href="#" class="catalog-screen__item center">
        <img src="./images/birds.png" alt="#eror" class="catalog-screen__img" />
        <p class="catalog-screen__font">Родительский клуб</p>
      </a>
      <a href="#" class="catalog-screen__item center">
        <img src="./images/Flags.png" alt="#eror" class="catalog-screen__img" />
        <p class="catalog-screen__font">Языковые клубы</p>
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
.catalog-screen
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
    padding: 35px 45px 21px 45px
    background-color: #cbe2ef
    //max-width: 350px
    //width: 75%
    //height: 250px

    &:hover .catalog-screen__img, .catalog-screen__font
      transform: scale(1.1)

  &__img
    //max-height: 200px
    transition: 1s

  &__font
    margin-top: auto
    transition: 1s

//.catalog-element:hover .catalog-img
//  transform: scale(1.1)
//.catalog-element:hover .catalog-font
//  transform: scale(1.1)
</style>
