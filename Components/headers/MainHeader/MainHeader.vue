<template>
<header class="ista-container main-header">
  <nuxt-link to="/">
    <img src="~assets/images/logo/istaLogo.png" alt="ISTA" style="height: 57px;">
  </nuxt-link>
  <div class="main-header__right">
    <nav>
      <ul class="main-header__nav-ul">
        <li class="main-header__nav-li">
          <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Каталог</md-button>

            <md-menu-content>
              <md-menu-item to="/excursions">Экскурсии</md-menu-item>
              <md-menu-item @click="()=>{}">My Item 2</md-menu-item>
              <md-menu-item @click="()=>{}">My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
        </li>
        <li>
          <md-button>О нас</md-button>
        </li>
        <li>
          <md-button>Блог</md-button>
        </li>
        <li>
          <md-button>Контакты</md-button>
        </li>
      </ul>
    </nav>

    <LanguageSelect />

    <md-button>Войти</md-button>
  </div>
</header>
</template>

<script>
import LanguageSelect from "~/components/LanguageSelect/LanguageSelect.vue";
export default {
  name: "MainHeader",
  components: {LanguageSelect}
}
</script>

<style lang="sass" scoped>
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
</style>
