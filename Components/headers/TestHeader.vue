<template>

    <md-button  class="md-primary" @click="email">Записаться</md-button>


</template>

<script>
export default {
data() {
    return {

        }
    },
    methods: {
        email() {
            this.$mail.send({
                from: 'shabbaykina99@gmail.com',
                subject: 'Incredible',
                text: 'This is an incredible test message',
            })
        }
    }

}
</script>

<style>

</style>