<template>
  <md-card md-with-hover>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img :src="content.photo" alt="baikal">
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title"> {{ content.title }} </span>
          <span class="md-subhead">{{ content.short_description }}</span>
        </md-card-header>

        <md-card-actions>
          <md-button :to="`/event/${content.id}`">
            подробнее
          </md-button>

          <md-button @click="showSubscribeDialog">
            купить
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    content: {
      type: Object
    }
  },

  methods: {
    showSubscribeDialog() {
      console.log('test')
      this.$emit('showSubscribeDialog')
      this.$nextTick()
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
