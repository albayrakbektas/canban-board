<template>
  <div class="empty-page">
    <div class="page-padding">
      <div class="empty-container">
        <div class="empty-rows">
          <img src="../assets/emptyRow.svg" alt="empty row" />
          <img src="../assets/emptyRow.svg" alt="empty row" />
          <img src="../assets/emptyRow.svg" alt="empty row" />
        </div>
        <div class="error-container">
          <span class="material-symbols-outlined"> error </span>
        </div>
      </div>
      <h1>There is no board to show</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyValue",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.empty-page {
  padding: 1.5rem;
  background-color: $backgroundColor-secondary;
  .page-padding {
    display: grid;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    background-color: $backgroundColor-primary;
    width: 100%;
    border: 1px solid rgba(151, 151, 151, 1);
    @media screen and (max-width: $screen-mobile) {
      padding: 2rem 0;
    }
  }
  .empty-container {
    position: relative;
    justify-self: center;
    width: min-content;
    .empty-rows {
      width: min-content;
      background-color: $backgroundColor-empty-rows;
      border: 1px solid #dcdfe2;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 1rem;
      padding: 2rem;
    }
    .error-container {
      position: absolute;
      right: -25px;
      bottom: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 69px;
      width: 69px;
      border-radius: 50%;
      background-color: $backgroundColor-error;
      span {
        font-size: $fontSize-xxl;
        color: $color-button;
      }
    }
  }
  h1 {
    color: $color-h1;
    font-size: $fontSize-xxl;
    line-height: $lineHeight-xxl;
    @media screen and (max-width: $screen-mobile) {
      font-size: $fontSize-l;
      line-height: $lineHeight-xl;
    }
  }
}
</style>
