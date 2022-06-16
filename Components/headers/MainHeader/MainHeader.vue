<template>
  <header class="ista-container main-header page-container">
    <!-- BURGER START -->
    <div class="main-header__sm">
      <md-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button @click="menuVisible = !menuVisible">
              <div class="burger">
                <img src="./images/menu.png" alt="">
              </div>
            </md-button>
          </div>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">{{ $t('menu') }}</md-toolbar>

        <md-list>
          <md-list-item>
            <nuxt-link :to="localePath('/')">{{ $t('main') }}</nuxt-link>
          </md-list-item>
          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('excursions') }}</nuxt-link>
          </md-list-item>

          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('parents') }}</nuxt-link>
          </md-list-item>

          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('lang') }}</nuxt-link>
          </md-list-item>

          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('about') }}</nuxt-link>
          </md-list-item>

          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('blog') }}</nuxt-link>
          </md-list-item>

          <md-list-item>
            <nuxt-link :to="localePath('/excursions')">{{ $t('contact') }}</nuxt-link>
          </md-list-item>
        </md-list>
      </md-drawer>
    </div>
    <!-- BURGER END -->
    <nuxt-link to="/">
      <img src="~assets/images/logo/istaLogo.png" alt="ISTA" class='logo' />
    </nuxt-link>
    <div class="main-header__right">
      <!-- DESKTOP MENU START -->
      <nav class="main-header__dt">
        <ul class="main-header__nav-ul">
          <li class="main-header__nav-li">
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger>{{ $t('catalog') }}</md-button>
              <md-menu-content>
                <md-menu-item :to="localePath('/excursions')">{{ $t('excursions') }}</md-menu-item>
                <md-menu-item @click="() => {}">{{ $t('parents') }}</md-menu-item>
                <md-menu-item @click="() => {}">{{ $t('lang') }} </md-menu-item>
              </md-menu-content>
            </md-menu>
          </li>
          <li>
            <md-button>{{ $t('about') }}</md-button>
          </li>
          <li>
            <md-button>{{ $t('blog') }}</md-button>
          </li>
          <li>
            <md-button>{{ $t('contact') }}</md-button>
          </li>
        </ul>
      </nav>
      <!-- DESKTOP MENU END -->
      <LanguageSelect />
      <md-button class="btn-grad">{{ $t('signIn') }}</md-button>
    </div>
  </header>
</template>

<script>
import LanguageSelect from "~/Components/LanguageSelect/LanguageSelect.vue";
export default {
  name: "MainHeader",
  components: { LanguageSelect },
  data: () => ({
    menuVisible: false
  })

};
</script>

<style lang="sass" scoped>
  @import "~assets/sass/ui-kit/mixin"

//LOGO STYLE START

.logo 
  max-width: 108px

//LOGO STYLE END
.main-header
  display: flex
  justify-content: space-between
  align-items: center

  &__right
    display: flex
    align-items: center
    button
      z-index: 3 !important

  &__nav-ul
    display: flex
    align-items: center
    .md-button
      font-family: 'Montserrat'
      text-transform: none
      font-size: $text-18
      width: 111px
  &__sm
    display: none

@include laptop
  .main-header
    &__dt
      display: none
    &__sm
      display: block
      .md-toolbar-section-start
          display: block  !important

          padding: 0 !important
      .md-toolbar-section-start
        button.md-button.md-theme-default
          margin: 0 !important
          div.md-ripple
            padding: 0 !important
      .md-toolbar.md-theme-default.md-transparent
        font-family: 'Montserrat-SM'
        font-size: $text-18

        color: $dark-blue
      a 
        font-family: 'Montserrat'
        font-size: $text-16

        color: $main-blue !important
  .md-toolbar.md-large
    min-height: 50px
  .burger
    position: relative
    display: block
    width: 50px
    // background-color: red  
    img
      width: 50px
      object-fit: contain 

  .md-drawer 
    width: 230px
    max-width: calc(100vw - 125px)
  .md-toolbar.md-theme-default.md-primary
    background: transparent
  .md-elevation-4
    box-shadow: none

</style>
<style lang="scss" scoped>




// .md-app {
//     max-height: 400px;
//     border: 1px solid rgba(#000, .12);
// }

// .md-toolbar {
//     height: 196px;
// }

// Demo purposes only

</style>
