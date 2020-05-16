<template>
  <div>
    <div ref="chartdata" class="big-chart"></div>
  </div>
</template>

<script lang="ts">
/** echarts */
import echarts from "echarts";
import Vue from "vue";
export default Vue.extend({
  name: "BarChart",
  props: ["datasource"],
  data() {
    return {
      chartHandle: {}
    };
  },
  watch: {
    datasource: {
      handler() {
        this.setChart();
      },
      deep: true
    }
  },
  methods: {
    initChart() {
      this.chartHandle = echarts.init(this.$refs.chartdata as HTMLDivElement);
    },
    setChart() {
      (this.chartHandle as echarts.ECharts).setOption({
        legend: {
          data: ["rx", "tx"]
        },
        title: {
          text: "网络流量（5分钟）"
        },
        dataset: {
          source: this.datasource
            ? this.datasource
            : [
                [10, 1, 2],
                [11, 21, 11]
              ]
        },
        xAxis: {
          type: "time"
        },
        yAxis: { name: "KB" },
        dataZoom: [
          {
            startValue: "2020-05-16T05:15:19.451Z"
          },
          { type: "inside" }
        ],
        series: [
          {
            name: "rx",
            type: "line",
            encode: { x: 0, y: 1 }
          },
          {
            name: "tx",
            type: "line",
            encode: { x: 0, y: 2 }
          }
        ]
      });
    }
  },
  mounted() {
    this.initChart();
    this.setChart();
  }
});
</script>

<style lang="scss" scoped>
.big-chart {
  width: 1000px;
  height: 500px;
}
</style>
