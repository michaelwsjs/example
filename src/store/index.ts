import { createStore } from "vuex";

export default createStore({
  state: {
    themeColor: "#DD2590"
  },
  getters: {
    themeColor: state => state.themeColor
  },
  mutations: {
    setThemeColor(state, value: string) {
      state.themeColor = value;
    }
  }
});
