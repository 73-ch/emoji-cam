<template>
  <div>
    <canvas ref="canvas" id="main-canvas"></canvas>
  </div>
</template>

<script>
import Camera from "@/assets/js/Camera";
import RenderingController from "../assets/js/RenderingController";

export default {
  name: "Renderer",
  mounted() {
    this.camera = new Camera();

    this.camera.createCameraStream().then(id => {
      this.videoElement = this.camera.createHiddenVideo(window.innerWidth, window.innerHeight);

      this.resized();

      this.$el.appendChild(this.videoElement);

      this.controller = new RenderingController(this.$refs.canvas, this.camera);
      this.controller.start();

      this.$root.$emit("stream_created", id);

      window.addEventListener("resize", this.resized.bind(this));
    });

    this.$root.$on("controller_update", (e, s) => {
      if (e.target.id === "video-checkbox") {
        this.videoElement.style.visibility = s.showvideo ? "visible" : "hidden";
      } else if (e.target.id === "canvas-checkbox") {
        this.$refs.canvas.style.visibility = s.showcanvas ? "visible" : "hidden";
      } else if (e.target.id === "device-select") {
        this.camera.setDeviceId(s.camera_device_id);
      } else if (e.target.id === "emoji-size") {
        this.controller.emoji_renderer.size_adjust = s.emoji_size;
      }
    });
  },
  methods: {
    resized() {
      if (window.innerWidth > window.innerHeight * this.camera.camera_aspect_ratio) {
        this.videoElement.width = window.innerHeight * this.camera.camera_aspect_ratio;
        this.videoElement.height = window.innerHeight;
      } else {
        this.videoElement.width = window.innerWidth;
        this.videoElement.height = window.innerWidth / this.camera.camera_aspect_ratio;
      }
      this.$refs.canvas.width = this.videoElement.width;
      this.$refs.canvas.height = this.videoElement.height;
    }
  }
};
</script>

<style scoped lang="scss">
#main-canvas {
  position: absolute;
}
</style>
