<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
// @ is an alias to /src
@import "@/assets/sass/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: $fontWeight-regular;
}
body {
  background-color: $backgroundColor-secondary;
  overflow: hidden;
  @media screen and (max-width: $screen-mobile) {
    overflow: unset;
  }
}
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
