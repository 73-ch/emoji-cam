<template>
  <div class="container">
    <vue-loading
      type="spiningDubbles"
      color="#aaa"
      :size="{ width: '100px', height: '100px' }"
      class="loading"
    ></vue-loading>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
export default {
  name: "Loading",
  components: { VueLoading }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
}
</style>
