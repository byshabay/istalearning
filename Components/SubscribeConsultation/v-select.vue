<template>
    <div class="v-select">
        <label for="email">Выберите язык</label>
        <md-input name="" class="title" @click="areOptionsVisible = !areOptionsVisible" :value="selected">

            <div class="options" v-if="areOptionsVisible">
                <p v-for="option in options" :key="option.value" @click="selectOption(option)">
                    {{option.name}}
                </p>
            </div>
        </md-input>

    </div>



</template>

<script>

export default {
    name: "v-select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        }

    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false
        }
    }


}
</script>

<style scoped lang="sass">
    @import "~assets/sass/ui-kit/mixin"
    .v-select
        position: relative
        width: 100%
        z-index: 2
        
        cursor: pointer 
        p 
            margin: 0
        .options 
            display: block
            border: solid 1px $dark-blue
            position: absolute
            top: 30px 
            right: 0
            width: 100%

            background: #fff
            p:hover 
                
                background: #e7e7e7
        .title 
            // border: 1px solid $dark-blue

</style>