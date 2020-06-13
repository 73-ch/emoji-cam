<template>
  <div>
    video: <input type="checkbox" v-model="struct.showvideo" @change="update">
    canvas: <input type="checkbox" v-model="struct.showcanvas" @change="update">
  </div>
</template>

<script>
export default {
  name: "Controller",
  data() {
    return {
      struct: {
        showvideo: true,
        showcanvas: true
      }
    };
  },
  methods: {
    update(){
      this.$root.$emit("controller_update", this.struct);
    }
  }
};
</script>

<style scoped></style>
