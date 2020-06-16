<template>
  <div>
    video: <input id="video-checkbox" type="checkbox" v-model="struct.showvideo" @change="update" /> canvas:
    <input id="canvas-checkbox" type="checkbox" v-model="struct.showcanvas" @change="update" /> camera_device:
    <select id="device-select" v-model="struct.camera_device_id" @change="update" ref="device_select"></select>
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
        camera_device_id: ""
      }
    };
  },
  mounted() {
    this.initDeviceSelect();
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
      console.log(e);
      this.$root.$emit("controller_update", e, this.struct);
    }
  }
};
</script>

<style scoped></style>
