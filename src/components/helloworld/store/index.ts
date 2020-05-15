import home from "./home";

const store = {
  namespaced: true,
  state: {
    loading: false,
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
  },
  modules: { home },
  actions: {},
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
