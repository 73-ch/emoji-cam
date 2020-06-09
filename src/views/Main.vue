<template>
  <div>
    <renderer class="renderer"></renderer>
  </div>
</template>

<script>
import Renderer from "../components/Renderer";

export default {
  name: "Main",
  components: { Renderer }
};
</script>

<style scoped>
.renderer {
  width: 100vw;
  height: 100vh;
}
</style>
