<template>
  <div>
    <canvas ref="canvas" id="main-canvas"></canvas>
  </div>
</template>

<script>
import RenderingController from "../assets/js/RenderingController";

export default {
  name: "Renderer",
  props: {
    width: {},
    height: {}
  },
  mounted() {
    this.controller = new RenderingController(this.$refs.canvas);

    this.controller.start();

    console.log(`${this.publicPath}`);
  },
  computed: {
    styles() {
      return {
        "--width": this.width,
        "--height": this.height
      };
    }
  }
};
</script>

<style scoped lang="scss">
#main-canvas {
  --width: 100vw;
  --height: 100vh;

  width: var(--width);
  height: var(--height);
}
</style>
