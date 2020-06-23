<template>
  <div class="main">
    <full-window-loading v-show="loading"></full-window-loading>
    <controller v-show="!loading" @background-color-changed="setBackgroundColor"></controller>
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
  },
  methods: {
    setBackgroundColor(color) {
      this.$el.style.backgroundColor = color;
    }
  }
};
</script>

<style scoped>
.renderer {
  width: 100vw;
}

.main {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
