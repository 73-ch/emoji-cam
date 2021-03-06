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
    const constraints = {
      audio: false,
      video: true
    };

    if (localStorage.struct) {
      constraints.video = { deviceId: JSON.parse(localStorage.struct).camera_device_id };
    }

    this.camera = new Camera(constraints);

    this.controller = new RenderingController(this.$refs.canvas, this.camera);

    Promise.all([this.camera.createCameraStream(), this.controller.load()]).then(values => {
      this.videoElement = this.camera.createHiddenVideo(window.innerWidth, window.innerHeight);

      this.resized();

      this.$el.appendChild(this.videoElement);

      this.controller.start();

      this.$root.$emit("stream_created", values[0]);

      window.addEventListener("resize", this.resized.bind(this));

      this.$root.$emit("renderer-loaded", true);
      this.$emit("loaded");
    });

    this.$root.$on("controller_update", (e, s) => {
      if (e.target.id === "video-checkbox") {
        this.videoElement.style.visibility = s.showvideo ? "visible" : "hidden";
      } else if (e.target.id === "video-blur-checkbox") {
        this.videoElement.style.filter = s.blurvideo ? "blur(10px)" : "none";
      } else if (e.target.id === "canvas-checkbox") {
        this.$refs.canvas.style.visibility = s.showcanvas ? "visible" : "hidden";
      } else if (e.target.id === "device-select") {
        this.camera.setDeviceId(s.camera_device_id);
      } else if (e.target.id === "emoji-size") {
        this.controller.emoji_renderer.size_adjust = s.emoji_size;
      } else if (e.target.id === "manual-mode") {
        this.controller.emotion_controller.manual_mode = s.manual;
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
      } else if (Object.keys(this.controller.emoji_renderer.emoji_lookup).some(emo => emo === e.target.id)) {
        this.controller.emoji_renderer.emoji_lookup[e.target.id] = e.target.value;
      } else if (e.target === "all") {
        this.videoElement.style.visibility = s.showvideo ? "visible" : "hidden";
        this.videoElement.style.visibility = s.showvideo ? "visible" : "hidden";
        this.videoElement.style.filter = s.blurvideo ? "blur(10px)" : "none";
        this.camera.setDeviceId(s.camera_device_id);
        this.controller.emoji_renderer.size_adjust = s.emoji_size;
        this.controller.emotion_controller.manual_mode = s.manual;
        this.background_enable = s.showbackground;
        for (let emo of Object.keys(s.emoji_lookup)) {
          this.controller.emoji_renderer.emoji_lookup[emo] = s.emoji_lookup[emo];
        }
      }
    });

    this.$root.$on("requestStatics", () => {
      const statics = this.controller.emoji_renderer.getStaticsText();

      const dummyTextarea = document.createElement("textarea");

      document.body.appendChild(dummyTextarea);

      dummyTextarea.textContent = statics;
      dummyTextarea.select();
      document.execCommand("copy");

      document.body.removeChild(dummyTextarea);

      console.log(statics);
    });

    window.addEventListener("beforeunload", () => {
      const statics = this.controller.emoji_renderer.getStaticsJson();

      for (let e of Object.keys(statics)) {
        this.$ga.event("Emotion", "rate", e, Math.floor(statics[e] * 100));
      }
    });

    window.addEventListener("keydown", e => {
      const i = ["1", "2", "3", "4", "5", "6", "7"].indexOf(e.key);

      if (i > -1) {
        this.controller.emotion_controller.current_emotion = this.controller.emotion_controller.EMOTION_LIST[i];
      }
    });
  },
  beforeDestroy() {
    this.controller.stop();
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
