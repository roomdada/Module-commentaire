import { createStore } from "vuex"

const store = createStore({
  state: {
    user: {
      token: null,
      data: {},
      isLoggedIn: false
    },
    connected: false,
  },
  mutations: {

    setAuth(state, user) {
      state.user.data = user;
      state.user.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(user));
    },


    initial(state) {
      if(localStorage.getItem('user')) {
        state.user.data = JSON.parse(localStorage.getItem('user'));
        state.user.isLoggedIn = true;
        state.connected = true;
      }
    },


    logout(state) {
      state.user.token = null;
      localStorage.removeItem('user');
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
