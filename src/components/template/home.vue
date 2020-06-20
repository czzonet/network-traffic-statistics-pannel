<template>
  <div class="hello">
    <template-view></template-view>
  </div>
</template>

<script lang="ts">
/** define */
import { NAME, MODULE_HOME, CONTENT } from "./define";
/** api */
import { total } from "./api/index";
/** vue vuex */
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
/** views */
import TemplateView from "./views/TemplateView/index.vue";

export default Vue.extend({
  name: "home",
  components: { TemplateView },
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapState([NAME, MODULE_HOME].join("/"), ["loading", "allrx", "alltx"])
  },
  methods: {
    ...mapActions([NAME, MODULE_HOME].join("/"), ["Total"]),
    total() {
      this.Total().then(d => {
        d ? this.$message.success("已刷新") : this.$message.error("请求失败");
      });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
