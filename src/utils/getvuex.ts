/* ******** */
/**
 * TOFIX： 无法捕获mapstate等等的错误？
 */

import { mapState, mapMutations, mapActions } from "vuex";

export const getMapState = (paths: string[], map: any) => {
  try {
    const namespace = paths.filter((d) => !!d).join("/");
    /** 根路径 直接传 */
    const t = paths.length ? mapState(namespace, map) : mapState(map);
    return t;
  } catch (error) {
    console.log("[E] [getMapState]", error);
    return {};
  }
};

export const getMapMutations = (paths: string[], map: any) => {
  try {
    /** 移除空项并用'/'链接路径 */
    const namespace = paths.filter((d) => !!d).join("/");
    /** 根路径 直接传 */
    const t = paths.length ? mapMutations(namespace, map) : mapMutations(map);
    return t;
  } catch (error) {
    console.log("[E] [getMapMutations]", error);
    return {};
  }
};

export const getMapActions = (paths: string[], map: any) => {
  try {
    /** 移除空项并用'/'链接路径 */
    const namespace = paths.filter((d) => !!d).join("/");
    /** 根路径 直接传 */
    const t = paths.length ? mapActions(namespace, map) : mapActions(map);
    return t;
  } catch (error) {
    console.log("[E] [getMapActions]", error);
    return {};
  }
};
