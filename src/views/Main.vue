<template>
  <div class="background">
    <renderer class="renderer" :width="'100vw'" :height="'100vw'"></renderer>
  </div>
</template>

<script>
import Camera from "@/assets/js/Camera";
import Renderer from "../components/Renderer";

export default {
  name: "Main",
  components: { Renderer },
  mounted() {
    this.camera = new Camera();

    this.videoElement = this.camera.getVideoElement(window.innerWidth, window.innerHeight);
    this.$el.appendChild(this.videoElement);

    window.addEventListener("resize", this.resized.bind(this));
  },
  methods: {
    resized() {
      this.videoElement.width = window.innerWidth;
      this.videoElement.height = window.innerHeight;
    },
  },
};
</script>

<style scoped>
.renderer {
  position: fixed;
}
</style>
