<template>
    <div class="review-item">
        <img class="review-item__mark-start" src="./images/mark-start.png" alt="">
        <p class="review-item__desc">{{ content.description }}</p>

        <div class="review-item__author">
            <img src="./images/account.png" alt="">
            <div>
                <p class="review-item__name">
                    Anonim
                </p>
                <p class="review-item__date">
                    22.06.2022
                </p>
            </div>
        </div>
        <img class="review-item__mark-end" src="./images/mark-end.png" alt="">
    </div>
</template>

<script>
export default {
    name: "ReviewItem",
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

</style>
