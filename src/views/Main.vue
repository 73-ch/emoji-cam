<template>
  <div class="main">
    <full-window-loading v-show="loading"></full-window-loading>
    <div class="policy-check" v-show="!policy_checked">
      <p>
        本サイトは認識結果の調査およびCookieを使用しております．詳しくは
        <router-link to="/privacy_policy">プライバシーポリシー</router-link
        >をご覧ください．本サイトの利用を続けることでプライバシーポリシーに同意するものとします．
      </p>
      <button @click="policy_checked = true">閉じる</button>
    </div>
    <controller v-show="!loading" @background-color-changed="setBackgroundColor"></controller>
    <renderer v-show="!loading" class="renderer" @loaded="loading = false"></renderer>
  </div>
</template>

<script>
import Renderer from "@/components/Renderer";
import Controller from "@/components/Controller";
import FullWindowLoading from "@/components/FullWindowLoading";

export default {
  name: "Main",
  components: {
    Renderer,
    Controller,
    FullWindowLoading
  },
  data() {
    return {
      loading: true,
      policy_checked: false
    };
  },
  mounted() {
    if (localStorage.getItem("policy_checked")) {
      this.policy_checked = true;
    }
  },
  methods: {
    setBackgroundColor(color) {
      this.$el.style.backgroundColor = color;
    }
  },
  watch: {
    policy_checked: function() {
      localStorage.setItem("policy_checked", "1");
    }
  }
};
</script>

<style scoped lang="scss">
.policy-check {
  opacity: 0.8;
  color: #2f2f2f;
  max-width: 80vw;
  text-align: center;
  margin: 10px auto;
  * {
    display: inline;
  }
}

.renderer {
  width: 100vw;
}

.main {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
