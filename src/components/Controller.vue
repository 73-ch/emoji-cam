<template>
  <div>
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
        <input
          id="emoji-size"
          type="range"
          min="0.1"
          max="4.0"
          step="0.1"
          v-model="struct.emoji_size"
          @input="update"
        />
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
    <div class="container">
      <div>
        <label for="neutral">neutral: </label>
        <input type="text" id="neutral" ref="neutral" size="2" @input="update" v-model="struct.emoji_lookup.neutral" />
      </div>
      <div>
        <label for="angry">angry: </label>
        <input type="text" id="angry" ref="angry" size="2" @input="update" v-model="struct.emoji_lookup.angry" />
      </div>
      <div>
        <label for="disgusted">disgusted: </label>
        <input
          type="text"
          id="disgusted"
          ref="disgusted"
          size="2"
          @input="update"
          v-model="struct.emoji_lookup.disgusted"
        />
      </div>
      <div>
        <label for="feaful">feaful: </label>
        <input type="text" id="feaful" ref="feaful" size="2" @input="update" v-model="struct.emoji_lookup.fearful" />
      </div>
      <div>
        <label for="happy">happy: </label>
        <input type="text" id="happy" ref="happy" size="2" @input="update" v-model="struct.emoji_lookup.happy" />
      </div>
      <div>
        <label for="sad">sad: </label>
        <input type="text" id="sad" ref="sad" size="2" @input="update" v-model="struct.emoji_lookup.sad" />
      </div>
      <div>
        <label for="surprised">surprised: </label>
        <input
          type="text"
          id="surprised"
          ref="surprised"
          size="2"
          @input="update"
          v-model="struct.emoji_lookup.surprised"
        />
      </div>
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
        background_color: "#ffffff",
        emoji_lookup: {
          angry: "😡",
          disgusted: "😟",
          fearful: "😨",
          happy: "🤩",
          neutral: "🙂",
          sad: "🥺",
          surprised: "😳"
        }
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
        } else if (k === "emoji_lookup") {
          for (let emo of Object.keys(obj[k])) {
            this.$set(this.struct.emoji_lookup, emo, obj[k][emo]);
          }
        } else {
          this.$set(this.struct, k, obj[k]);
        }
      }
      this.$root.$on("renderer-loaded", () => {
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
