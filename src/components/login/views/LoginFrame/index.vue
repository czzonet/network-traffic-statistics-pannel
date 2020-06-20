<template>
  <div class="container">
    <form-box></form-box>
    <div>还没有账号？注册</div>
    <div>忘了密码</div>
  </div>
</template>

<script lang="ts">
/** vue vuex */
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
/** define */
import { NAME } from "../../define";
/** components */
import FormBox from "../FormBox/index.vue";

export default Vue.extend({
  name: "LoginFrame",
  components: { FormBox },
  props: {
    amount: Number
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([NAME].join("/"), ["loading"])
  }
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>