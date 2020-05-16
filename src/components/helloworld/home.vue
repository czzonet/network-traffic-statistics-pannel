<template>
  <div class="hello">
    <p>
      <bar-chart :datasource="res"></bar-chart>
    </p>
    <p>
      {{ current }}
    </p>
    <p>
      <el-button @click="test">刷新</el-button>
      <el-button @click="add" :loading="loading">实时</el-button>
    </p>
  </div>
</template>

<script lang="ts">
import BarChart from "./views/BarChart/index.vue";
/** define */
import {
  getMapMutations,
  getMapActions,
  getMapState,
  NAME,
  MODULE_HOME,
  CONTENT,
} from "./define";
import Vue from "vue";
import { total } from "./api/index";
import { mapState, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: "home",
  props: {
    msg: String,
  },
  components: { BarChart },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    ...mapState([NAME, MODULE_HOME].join("/"), ["loading", "res", "current"]),
  },
  methods: {
    ...mapActions([NAME, MODULE_HOME].join("/"), ["Total", "Add"]),
    test() {
      this.Total().then((d) => {
        d ? this.$message.success("已刷新") : this.$message.error("请求失败");
      });
    },
    add() {
      this.Add().then((d) => {
        d ? this.$message.success("已刷新") : this.$message.error("请求失败");
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  padding: 40px;
}
</style>
