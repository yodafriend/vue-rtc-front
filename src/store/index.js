import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: 1
    },
    getters: {
        user: (state) => { 
            // if ((state.user == null || state.user == undefined) && localStorage.user)
            //     state.user = JSON.parse(localStorage.user);
            return state.user;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            // localStorage.user = user;
        }
    }
});