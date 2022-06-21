<template>
    <!-- 
    <div class="filters">
        <div>
            <input type="checkbox" :id="content.id" :name="content.name">
            <label :for="content.name">{{ content.value }}</label>
        </div>



         <div class="filters__h2">Категория</div>
        <div class="filters__group" v-if="content.name === 4">



        </div>

        <div class="filters__h2">Продолжительность</div>
        <div class="filters__group" v-if="content.name === 5">
            {{content.value}}
        </div> 



    </div> -->
    <div>
        <div class="filter__title " >
            Категория
        </div>
        <div v-for="(meta, index) in content" :key="index">
            <div v-if="meta.name === 4">
                <input type="checkbox" :value="meta" v-model="selectedFilters">
                <label>{{meta.value}}</label><br>
            </div>
        </div>
        <div class="filter__title">
            Продолжительность
        </div>
        <div v-for="(meta, index) in content" :key="index">
            <div v-if="meta.name === 5">
                <input type="checkbox" :value="meta" v-model="selectedFilters">
                <label>{{meta.value}}</label><br>
            </div>
        </div>

        <!-- <ul>
            <li v-for="(meta, index) in selectedFilters" :key="index">{{meta.value}} - {{meta.name}}</li>
        </ul> -->

        <md-button @click="setFilters"> Применить фильтры </md-button>


    </div>
</template>

<script>
export default {
    name: "MetaFilter",
    props: {
        content: {
            type: Array
        }
    },

    data() {
        return {
            users: [
                { name: 'Tom', age: 22 },
                { name: 'Bob', age: 25 },
                { name: 'Sam', age: 28 },
                { name: 'Alice', age: 26 }
            ],
            selectedFilters: []
        }
    },
    methods: {
        setFilters(){
            this.$emit("setFilters", {
                filters: this.selectedFilters
            });
        }
    }

}
</script>

<style>

</style>
