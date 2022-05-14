<template>
  <div class="empty-page">
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
</template>

<script>
export default {
  name: "EmptyValue",
};
</script>

<style scoped>
.empty-page {
  display: grid;
  align-items: center;
  justify-content: center;
}
.empty-container {
  position: relative;
}
.empty-rows {
  width: 100%;
  background-color: #f5f9fd;
  border: 1px solid #dcdfe2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
}
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 69px;
  width: 69px;
  border-radius: 50%;
  padding: 20px;
  background-color: #ea2027;
}
.error-container span {
  font-size: 30px;
  color: #ffffff;
}
h1 {
  color: #2c3a47;
}
</style>
