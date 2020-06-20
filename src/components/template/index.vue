<template>
  <div v-loading="loading">
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
