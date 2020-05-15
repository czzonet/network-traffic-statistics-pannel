<template>
  <div v-loading="loading">
    <router-view></router-view>
  </div>
</template>

<script>
/** define */
import {
  getMapMutations,
  getMapActions,
  getMapState,
  NAME,
  MODULE_SINGLE,
  MODULE_TOTAL,
  DEBUG,
  CONTENT
} from "./define.ts";

export default {
  name: `${NAME}`,
  computed: {
    ...getMapState([NAME], ["loading"])
  }
};
</script>
