<template>
    <div class="footer">
        <div class="ista-container footer__container">
            <!-- 1.FIRST COLUMN START -->
            <div class="footer__wrap">
                <img src="./images/footer-logo.png" alt="" class="footer__logo">
                <!-- phone block -->
                <div class="footer__item">
                    <img src="./images/tel.png" alt="">
                    <a href="tel:+79007777777">8(900) 777 77-77</a>
                </div>
                <!-- email block -->
                <div class="footer__item">
                    <img src="./images/email.png" alt="">
                    <p>info@ista.com</p>
                </div>
            </div>
            <!-- 1.FIRST COLUMN END -->

            <!-- 2.SECOND COLUMN START -->
            <div class="footer__wrap">
                <div class="footer__h2">
                    {{ $t('partners')}}
                </div>

                <ul>
                    <li><a href="#">{{ $t('paragraph')}}</a></li>
                    <li><a href="#">{{ $t('paragraph')}}</a></li>
                    <li><a href="#">{{ $t('paragraph')}}</a></li>
                    <li><a href="#">{{ $t('paragraph')}}</a></li>
                </ul>
            </div>
            <!-- 2.SECOND COLUMN END -->

            <!-- 3.THIRD COLUMN START -->
            <div class="footer__wrap">
                <div class="footer__h2">
                    {{ $t('menu')}}
                </div>

                <ul>
                    <li><a href="#">{{ $t('about')}}</a></li>
                    <li><a href="#">{{ $t('excursions')}}</a></li>
                    <li><a href="#">{{ $t('parents')}} </a></li>
                    <li><a href="#">{{ $t('lang')}} </a></li>
                    <li><a href="#">{{ $t('blog')}}</a></li>
                    <li><a href="#">{{ $t('contact')}}</a></li>

                </ul>
            </div>
            <!-- 3.THIRD COLUMN END -->
        </div>

        <!-- 4. SOCIAL LINK START -->

        <div class="footer__social ista-container">
            <div class="footer__h2 ">
                {{ $t('sub')}}
            </div>

            <ul>
                <li><a href="#"><img src="./images/fb.png" alt=""></a></li>
                <li><a href="#"><img src="./images/tg.png" alt=""></a></li>
                <li><a href="#"><img src="./images/inst.png" alt=""></a></li>
            </ul>
        </div>

        <!-- 4. SOCIAL END START -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
    @import "~assets/sass/ui-kit/mixin"
    .footer
        padding: 35px 0 10px

        font-family: 'Montserrat'
        line-height: 150%
        font-size: $text-18

        background-color: $dark-blue
        color: #fff

        &__container
            display: flex
            justify-content: space-between
            
        &__wrap
            width: 32%
        &__item
            display: flex
            align-items: center
            margin-top: 19px

            img
                width: 30px
                height: 30px
                margin-right: 19px
            
        
        &__logo
            margin-bottom: 35px
        
        li
            list-style: none

            a 
                display: block
                padding: 10px 0
            
        
        ul 
            padding: 0
            margin-top: 35px
            
        a
            color: #fff !important
        
        &__h2 
            font-family: 'Montserrat-SM'

        &__social
            text-align: center
            
            ul
                display: flex
                align-items: center
                justify-content: center
                margin-top: 19px

                img
                    width: 50px
                    height: 50px
                    margin-right: 19px

</style>