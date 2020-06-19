<template>
  <div>
    <div class="container">
      <div class="line1">{{kbStyle}}</div>
      <div class="line2">{{humanReadableStyle}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TotalAmount",
  props: {
    amount: Number
  },
  data() {
    return {};
  },
  computed: {
    kbStyle() {
      return this.amount.toFixed(2) + "KB";
    },
    humanReadableStyle() {
      let t = "";
      const source = this.amount as number;
      source > 0 && source < 1000
        ? (t = source.toFixed(2) + "KB")
        : source >= 1000 && source < 1000000
        ? (t = (source / 1000).toFixed(2) + "MB")
        : source >= 1000
        ? (t = (source / 1000000).toFixed(2) + "GB")
        : "--";

      t = "(" + t + ")";
      return t;
    }
  }
});
</script>
