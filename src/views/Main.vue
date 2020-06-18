<template>
  <div>
    <full-window-loading v-show="loading"></full-window-loading>
    <controller v-show="!loading"></controller>
    <renderer v-show="!loading" class="renderer" @loaded="loading = false"></renderer>
  </div>
</template>

<script>
import Renderer from "@/components/Renderer";
import Controller from "@/components/Controller";
import FullWindowLoading from "@/components/FullWindowLoading";

export default {
  name: "Main",
  components: {
    Renderer,
    Controller,
    FullWindowLoading
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style scoped>
.renderer {
  width: 100vw;
}
</style>
