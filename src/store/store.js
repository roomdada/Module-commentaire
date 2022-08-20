import { createStore } from "vuex"

const store = createStore({
  state: {
    user: {
      token: null,
      data: {},
      isLoggedIn: false
    }
  },
  mutations: {

    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.user.token = token;
      localStorage.setItem('token', token);
    },


    initial(state) {
      if(localStorage.getItem('token')) {
        state.user.token = localStorage.getItem('token');
      }
    },

    logout(state) {
      state.user.token = null;
      localStorage.removeItem('token');
    },

    getToken(state) {
      return state.user.token;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    getToken({ commit }) {
      return commit("getToken");
    },

    setIsLoggedIn({ commit }, isLoggedIn) {
      commit("setIsLoggedIn", isLoggedIn);
    }
    
  }

});

export default store;
