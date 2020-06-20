<template>
  <div>
    <div class="container">TemplateView</div>
  </div>
</template>

<script lang="ts">
/** vue vuex */
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
/** define */
import { NAME } from "../../define";

export default Vue.extend({
  name: "TemplateView",
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
