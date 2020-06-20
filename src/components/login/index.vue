<template>
  <div v-loading="loading" class="index">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
/** define */
import { NAME } from "./define";
/** vue vuex */
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: `${NAME}`,
  computed: {
    ...mapState([NAME].join("/"), ["loading"])
  }
});
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  // background-color: #263238;
}
</style>