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
      <label for="device-select">camera device:</label>
      <select id="device-select" v-model="struct.camera_device_id" @change="update" ref="device_select"></select>
    </div>
    <div>
      <label for="emoji-size">emoji size:</label>
      <input id="emoji-size" type="range" min="0.1" max="3.0" step="0.1" v-model="struct.emoji_size" @input="update" />
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
        camera_device_id: "",
        emoji_size: "1.0"
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
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: 10px 15vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  div {
    margin: 0 5px;
    display: inline-flex;
    align-content: center;

    label {
      position: relative;
      top: 1px;
    }

    select {
      margin: 0 0 0 4px;
    }
  }
}
</style>
