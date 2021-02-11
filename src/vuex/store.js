import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex); 

const store = new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CLICK_TO_STATE: (state, posts) => {
            state.posts = posts;
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: 'GET'
            })
            .then((products) => {
                commit ('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        GET_CLICK_FROM_API({commit}) {
            return axios('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'GET'
            })
            .then((posts) => {
                commit ('SET_CLICK_TO_STATE', posts.data);
                return posts;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
    },

    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        POSTS(state) {
            return state.posts;
        },
    }
});

export default store;