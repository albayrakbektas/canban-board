<template>
  <div class="scroll-container">
    <div @click="backStart" class="scroll-button">
      <span class="material-symbols-outlined"> arrow_upward </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackToStart",
  methods: {
    backStart() {
      if (window.innerWidth <= "600") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        console.log("sad");
        // window.scrollTo({top: 0})
      }
    },
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
