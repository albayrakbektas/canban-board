<template>
  <div class="logo-container">
    <a class="brand-logo" href="#">
      <img src="../assets/brand-logo.svg" alt="brand logo" />
    </a>
  </div>
</template>

<script>
export default {
  name: "BrandLogo",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

* {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container {
  height: 60px;
  background-color: $backgroundColor-logo;
  .brand-logo {
    cursor: pointer;
    height: 100%;
    img {
      height: 55%;
    }
  }
}
</style>
