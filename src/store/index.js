import Vuex from "vuex";
import Vue from "vue";

import sudoku from "./modules/sudoku";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    sudoku
  }
});
