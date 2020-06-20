<template>
  <div>
    <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>

      <el-submenu index="1">
        <template slot="title">流量监控</template>

        <el-menu-item index="/main">最近5分钟</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuBar"
};
</script>
