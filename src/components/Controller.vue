<template>
  <div class="container">
    <div>
      <label for="video-checkbox">video: </label>
      <input id="video-checkbox" type="checkbox" v-model="struct.showvideo" @change="update" />
    </div>
    <div>
      <label for="canvas-checkbox">canvas:</label>
      <input id="canvas-checkbox" type="checkbox" v-model="struct.showcanvas" @change="update" />
    </div>
    <div>
      <label for="background-checkbox">background image:</label>
      <input id="background-checkbox" type="checkbox" v-model="struct.showbackground" @change="update" />
    </div>
    <div>
      <label for="device-select">camera device:</label>
      <select id="device-select" v-model="struct.camera_device_id" @change="update" ref="device_select"></select>
    </div>
    <div>
      <label for="emoji-size">emoji size:</label>
      <input id="emoji-size" type="range" min="0.1" max="4.0" step="0.1" v-model="struct.emoji_size" @input="update" />
    </div>
    <div>
      <label for="background-color">background color :</label>
      <input id="background-color" type="color" v-model="struct.background_color" @input="backgroundColorChanged" />
    </div>
    <div>
      <label for="background-img">background image: </label>
      <input id="background-img" type="file" accept="image/png,image/gif,image/jpeg" @change="imgFileSelected" />
    </div>
    <div>
      <a href="https://github.com/73-ch/emoji-cam#how-to-use">
        <button id="help">help</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controller",
  data() {
    return {
      struct: {
        showvideo: true,
        showcanvas: true,
        showbackground: false,
        camera_device_id: "",
        emoji_size: "1.0",
        background_color: "#ffffff"
      }
    };
  },
  mounted() {
    this.initDeviceSelect();
    this.$root.$on("stream_created", id => {
      if (!this.$refs.device_select) return;

      for (let c of this.$refs.device_select.childNodes) {
        if (c.value === id) this.struct.camera_device_id = id;
      }
    });

    this.$root.$on("background-img-loaded", t => {
      this.$set(this.struct, "showbackground", t);
    });

    if (localStorage.struct) {
      let obj = JSON.parse(localStorage.struct);
      for (let k of Object.keys(obj)) {
        if (k === "camera_device_id") {
          for (let c of this.$refs.device_select.childNodes) {
            if (c.value === obj[k]) this.struct.camera_device_id = obj[k];
          }
        } else {
          this.$set(this.struct, k, obj[k]);
        }
      }
      this.$root.$on("renderer-loaded", () => {
        console.log("update");
        this.update({ target: "all" });
        this.backgroundColorChanged();
      });
    }

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("struct", JSON.stringify(this.struct));
    });
  },
  methods: {
    initDeviceSelect() {
      navigator.mediaDevices.enumerateDevices().then(
        device_infos => {
          for (let i = 0; i < device_infos.length; ++i) {
            if (device_infos[i].kind === "videoinput") {
              const option = document.createElement("option");
              option.value = device_infos[i].deviceId;
              option.text = device_infos[i].label || `device ${i}`;
              this.$refs.device_select.appendChild(option);
            }
          }
        },
        e => {
          console.error(e);
        }
      );
    },
    update(e) {
      this.$root.$emit("controller_update", e, this.struct);
    },
    backgroundColorChanged() {
      this.$emit("background-color-changed", this.struct.background_color);
    },
    imgFileSelected(e) {
      if (!e.target.files[0]) return;

      this.$root.$emit("controller_update", e, e.target.files[0]);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 15vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  div {
    margin: 0 5px;
    display: inline-flex;
    align-content: center;

    label {
      margin: auto;
    }

    select,
    input {
      margin: auto 4px;
    }
  }
}
</style>
