<template>
  <header class="ista-container main-header">
    <nuxt-link to="/">
      <img src="~assets/images/logo/istaLogo.png" alt="ISTA" class='logo' />
    </nuxt-link>
    <div class="main-header__right">
      <nav>
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

  &__nav-ul
    display: flex
    align-items: center
    .md-button
      font-family: 'Montserrat'
      text-transform: none
      font-size: $text-18
      width: 111px
    
</style>
