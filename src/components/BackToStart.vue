<template>
  <div
    v-if="innerWidth <= '600' && windowTop > '50'"
    class="scroll-container"
    ref="container"
  >
    <div @click="backStart" class="scroll-button">
      <span class="material-symbols-outlined"> arrow_upward </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackToStart",
  data() {
    return {
      innerWidth: window.innerWidth,
      windowTop: 0,
    };
  },
  methods: {
    onResize() {
      this.innerWidth = window.innerWidth;
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    backStart() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.scroll-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  .scroll-button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: $backgroundColor-brewww;
    border: 1px solid $color-primary;
    border-radius: 5%;
    span {
      font-size: 2rem;
      color: $color-button;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
}
</style>
