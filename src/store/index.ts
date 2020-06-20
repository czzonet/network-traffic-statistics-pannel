import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import helloworld from "../components/helloworld/store/index";
import template from "../components/template/store/index";

const store = {
  state: {
    loading: false,
    token: "",
  },
  mutations: {},
  actions: {},
  modules: { helloworld, template },
} as StoreType<State>;

const MainStore = new Vuex.Store(store);

export default MainStore;

/** 状态 */
type State = {
  loading: boolean;
  token: string;
};
