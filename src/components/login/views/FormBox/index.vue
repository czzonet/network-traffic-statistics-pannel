<template>
  <div class="box">
    <div class="header">
      <div>登录</div>
    </div>
    <div class="bottem">
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
/** vue vuex */
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
/** define */
import { NAME } from "../../define";

export default Vue.extend({
  name: "FormBox",
  props: {
    amount: Number
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([NAME].join("/"), ["loading"])
  },
  methods: {
    login() {
      this.$router.push("/main");
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  height: 320px;
  width: 480px;

  flex-basis: 320px;
  flex-shrink: 0;
  border: 1px black solid;
}
</style>