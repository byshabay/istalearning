<template>
    <div class="certificates-screen">
        <div class="ista-container">
            <h2 class="common-h2 certificates-screen__h2">
                {{ $t('cer')}}
            </h2>

            <ul class="certificates-screen__list">
                <li><img src="./images/dip1.png" alt=""></li>
                <li><img src="./images/dip2.png" alt=""></li>
                <li><img src="./images/dip3.png" alt=""></li>
            </ul>

            <md-button class=" certificates-screen__a">
                {{ $t('watchMore')}}
            </md-button>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
     @import "~assets/sass/ui-kit/mixin"
    .certificates-screen
        text-align: center
        
        background-color: #fff

        &__h2
            padding: 19px 0

            text-transform: uppercase
            
        &__list
            display: flex
            justify-content: space-between
            align-items: center
            
        .md-button.md-theme-default 
            margin: 19px 0
            font-family: "Montserrat-SM"
            font-size: $text-18

            color: $dark-blue

        li
            padding: 10px 15px
            width: 32%
            
            background: linear-gradient(322.57deg, #186E9E -9.6%, #BAD4E2 106.67%)
            
            img
                width: 100%
                max-width: 394px
                max-height: 280px
                height: 270px
                object-fit: cover
    @include laptop
        .certificates-screen
            li
                img
                    height: 200px
    @include tablet
        .certificates-screen
            li
                img
                    height: 150px
            .md-button.md-theme-default
                font-size: $text-16
        

</style>