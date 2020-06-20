<template>
  <div class="layout">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthLayout"
});
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
