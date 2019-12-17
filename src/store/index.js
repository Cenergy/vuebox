import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import mutations from "./mutations";
import actions from "./actions";

const state = {
  cartList: []
};

export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions,
  modules: {}
});
