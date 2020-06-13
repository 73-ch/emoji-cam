<template>
  <div>
    <renderer class="renderer"></renderer>
    <controller></controller>
  </div>
</template>

<script>
import Renderer from "../components/Renderer";
import Controller from "@/components/Controller";

export default {
  name: "Main",
  components: { Renderer, Controller }
};
</script>

<style scoped>
.renderer {
  width: 100vw;
}
</style>
