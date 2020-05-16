import { total, add } from "../api";
import { deepcopywithwatch } from "@/utils/deepcopywithwatch";

const store = {
  namespaced: true,
  state: {
    loading: false,
    res: [["", 0, 0]],
    current: "",
    allrx: 0,
    alltx: 0,
  },
  mutations: {
    LOADING: (state, payload: boolean) => {
      state.loading = payload;
    },
    LOADING_ON: (state, payload: boolean) => {
      state.loading = payload;
    },
    LOADING_OFF: (state, payload: boolean) => {
      state.loading = payload;
    },
    RES: (state, payload) => {
      state.res = deepcopywithwatch(state.res, payload);
    },
    CURRENT: (state, payload) => {
      state.current = deepcopywithwatch(state.current, payload);
    },
    ALLRX: (state, payload: number) => {
      state.allrx = payload;
    },
    ALLTX: (state, payload: number) => {
      state.alltx = payload;
    },
  },
  modules: {},
  actions: {
    Total: async ({ state, commit, dispatch }: any, payload: any) => {
      try {
        commit("LOADING_ON", true);
        const res = await total();
        console.log("[I] [Total]: ", res.data);
        commit("RES", res.data.data);
        commit("ALLRX", res.data.allrx);
        commit("ALLTX", res.data.alltx);
        return true;
      } catch (error) {
        console.log("[E] [Total]: ", error);
        return false;
      } finally {
        commit("LOADING_OFF", false);
      }
    },
    Add: async ({ state, commit, dispatch }: any, payload: any) => {
      try {
        commit("LOADING_ON", true);
        const res = await add();
        console.log("[I] [Add]: ", res.data);
        commit("CURRENT", res.data.data);
        return true;
      } catch (error) {
        console.log("[E] [Add]: ", error);
        return false;
      } finally {
        commit("LOADING_OFF", false);
      }
    },
  },
} as Store;

export default store;

/** 仓库 */
type Store = {
  /** 命名空间  */
  namespaced: boolean;
  /** 状态 */
  state: State;
  /** 变更状态 */
  mutations: Mutations;
  /** 执行操作 */
  actions: Actions;
  /** 模块 */
  modules?: Modules;
};
/** 状态 */
type State = {
  loading: boolean;
  res: any[];
  current: string;
  allrx: number;
  alltx: number;
};
/** 模块 */
type Modules = any;
/** 同步变更状态函数 */
type Mutations = {
  [prop: string]: (state: State, payload: any) => void;
};
/** 异步执行操作函数 */
type Actions = {
  [prop: string]: (context: Context, payload?: any) => Promise<any>;
};
/** 模块上下文对象 */
type Context = {
  /** 状态 */
  state: State;
  /** 提交状态变更 */
  commit: (mutation: string, payload?: any, obj?: { root: boolean }) => void;
  /** 根状态 */
  rootState: any;
  /** 分发异步操作 */
  dispatch: (
    action: string,
    payload?: any,
    obj?: { root: boolean }
  ) => Promise<any>;
};
