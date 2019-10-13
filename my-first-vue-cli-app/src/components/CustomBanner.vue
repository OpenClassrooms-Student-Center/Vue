<template>
  <div class="banner">
    <span v-if="topIcon" :class="topIcon">{{ topIcon }}</span>
    <p>
      <span v-if="leftIcon" :class="leftIcon">{{ leftIcon }}</span>
      {{ text }}
      <span v-if="rightIcon" :class="rightIcon">{{ rightIcon }}</span>
    </p>
    <span v-if="bottomIcon" :class="bottomIcon">{{ bottomIcon }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomBanner',
  props: {
    topIcon: String,
    leftIcon: String,
    text: String,
    rightIcon: String,
    bottomIcon: String
  }
}
</script>

<style>
.banner {
  background-color: rgba(51, 166, 105, 0.73);
  color: white;
  padding: 20px 0;
  margin: 20px 0;
  font-weight: bold;
}

.banner span {
  font-weight: bold;
}
</style>
