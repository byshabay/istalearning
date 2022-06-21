<template>
  <md-card md-with-hover>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img :src="content.photo" alt="baikal" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <div class="event-wrap">
            <nuxt-link :to="`/event/${content.id}`"> <span class="md-title"> {{ content.title }} </span></nuxt-link>
            <!-- <span class="md-subhead">{{ content.short_description }}</span> -->
          </div>

          <span class="md-price"> {{ content.price }} ₽ </span>
        </md-card-header>

        <md-card-actions>
          <md-button :to="`/event/${content.id}`"> {{ $t('more')}} </md-button>

          <md-button @click="showSubscribeDialog"> {{ $t('buy')}} </md-button>
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
      type: Object,
    },
  },

  methods: {
    showSubscribeDialog() {
      console.log("test");
      this.$emit("showSubscribeDialog", {
        content: this.content
      });
      // this.$emit('testEmit', {content: this.content});
      this.$nextTick();
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
