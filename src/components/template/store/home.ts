import { total, add } from "../api";
import { deepcopywithwatch } from "@/utils/deepcopywithwatch";

const store = {
  namespaced: true,
  state: {
    loading: false,
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
  },
} as StoreType<State>;

export default store;

/** 状态 */
type State = {
  loading: boolean;
  allrx: number;
  alltx: number;
};
