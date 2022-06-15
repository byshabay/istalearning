<template>
    <div class="ista-container reviews-screen">
        <h2 class="common-h2 reviews-screen__h2">
            {{ $t('reviews')}}

            <SsrCarousel v-if="reviews.length" :slides-per-page="3" show-arrows show-dots paginate-by-slide>
                <div class="review-item photo-review">
                    <div class="review-item__h2">
                        {{ $t('rePhoto')}}
                    </div>
                    <img class="review-item__mark-start" src="./images/mark-start.png" alt="">

                    <p class="review-item__desc">
                        {{ $t('reMore')}}</p>

                    <div class="review-item__more">
                        <md-button>
                            {{ $t('more')}}
                        </md-button>
                    </div>
                    <img class="review-item__mark-end" src="./images/mark-end.png" alt="">
                </div>
                <ReviewItem v-for="(review, index) in reviews" :key="index" :content="review" />
            </SsrCarousel>

        </h2>
    </div>
</template>


<script>
import ReviewItem from "./ReviewItem.vue";
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";
export default {
    name: "ReviewsScreen",
    components: { ReviewItem, SsrCarousel },

    data() {
        return {
            count: 2,
            reviews: [
                {
                    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor ",
                },
                {
                    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor ",
                },
                {
                    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor ",
                }
            ],
            
        };
    },
}
</script>

<style lang="sass">
    @import "~assets/sass/ui-kit/mixin"

    .reviews-screen
        text-align: center

        &__h2
            display: block
            padding: 19px 0

        .ssr-carousel
            margin-top: 19px

    .review-item 
        position: relative
        padding: 35px
        overflow: hidden

        font-family: 'Montserrat'
        font-size: $text-16
        line-height: 150%
        text-align: left

        background-color: $bkg-color

        &__mark-start
            width: 34px
            height: 25px
            margin-bottom: 19px

        .photo-review &__mark-start
            margin-bottom: 35px

        .photo-review &__desc
            position: absolute
            display: block
            top: 40%
                        

        &__author
            margin-top: 19px
            display: flex
            
            img
                width: 50px
                height: 50px
                object-fit: cover
                margin-right: 19px
                align-items: center
            
        &__name
            font-family: 'Montserrat-SM' 
            
        &__mark-end
            position: absolute
            bottom: -10px
            right: -10px

        &__more
            position: absolute
            display: flex
            bottom: 35px
            left: 20px
            align-items: center
            justify-content: flex-start

            
        &__more 
            button 
                margin-left: 10px
                font-family: 'Montserrat-SM'
                text-transform: capitalize
                text-align: left

        &__more::after 
            content: url('./images/arrow.png')
            display: block
            position: relative
            
        &__h2
            position: absolute
            top: 19px
            width: 100%
            left: 0

            font-family: 'Montserrat-SM'
            text-align: center
</style>