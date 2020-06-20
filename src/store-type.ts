// export default {};

/** vuex 模块类型 */
interface StoreType<T> {
  /** 命名空间  */
  namespaced: boolean;
  /** 状态 */
  state: T;
  /** 变更状态 */
  mutations: {
    [prop: string]: (state: T, payload: any) => void;
  };
  /** 执行操作 */
  actions: {
    [prop: string]: (
      context: {
        /** 状态 */
        state: T;
        /** 提交状态变更 */
        commit: (
          mutation: string,
          payload?: any,
          obj?: { root: boolean }
        ) => void;
        /** 根状态 */
        rootState: any;
        /** 分发异步操作 */
        dispatch: (
          action: string,
          payload?: any,
          obj?: { root: boolean }
        ) => Promise<any>;
      },
      payload?: any
    ) => Promise<any>;
  };
  /** 模块 */
  modules?: any;
}
