<template>
  <div class="container">
    <canvas ref="canvas" id="main-canvas" width="300" height="200"></canvas>
    <img id="background-img" ref="background_img" v-show="background_enable" alt="background image" />
  </div>
</template>

<script>
import Camera from "@/assets/js/Camera";
import RenderingController from "../assets/js/RenderingController";

export default {
  name: "Renderer",
  data() {
    return {
      background_enable: false,
      background_aspect: 1.0
    };
  },
  mounted() {
    this.camera = new Camera();

    this.controller = new RenderingController(this.$refs.canvas, this.camera);

    Promise.all([this.camera.createCameraStream(), this.controller.load()]).then(values => {
      this.videoElement = this.camera.createHiddenVideo(window.innerWidth, window.innerHeight);

      this.resized();

      this.$el.appendChild(this.videoElement);

      this.controller.start();

      this.$root.$emit("stream_created", values[0]);

      window.addEventListener("resize", this.resized.bind(this));

      this.$emit("loaded");
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
      } else if (e.target.id === "background-img") {
        const file_reader = new FileReader();
        file_reader.addEventListener("load", () => {
          this.$refs.background_img.src = file_reader.result;
          const img = new Image();
          img.addEventListener("load", () => {
            this.background_aspect = img.naturalWidth / img.naturalHeight;
            this.background_enable = true;

            this.resized();

            this.$root.$emit("background-img-loaded", true);
          });
          img.src = file_reader.result;
        });

        file_reader.readAsDataURL(s);
      } else if (e.target.id === "background-checkbox") {
        this.background_enable = s.showbackground;
      }
    });

    window.addEventListener("beforeunload", () => {
      const statics = this.controller.emoji_renderer.getStatics();

      for (let e of Object.keys(statics)) {
        this.$ga.event("Emotion", "rate", e, Math.floor(statics[e] * 100));
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

      if (this.videoElement.width > this.background_aspect * this.videoElement.height) {
        this.$refs.background_img.width = this.background_aspect * this.videoElement.height;
        this.$refs.background_img.height = this.videoElement.height;
      } else {
        this.$refs.background_img.width = this.videoElement.width;
        this.$refs.background_img.height = this.videoElement.width / this.background_aspect;
      }

      this.$refs.canvas.width = this.videoElement.width;
      this.$refs.canvas.height = this.videoElement.height;

      this.controller.resized();
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

#background-img {
  position: absolute;
  z-index: 2;
}

#main-canvas {
  position: absolute;
  z-index: 3;
}
</style>
