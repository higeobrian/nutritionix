import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

vue.use(vuex)

var api = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "7c1dbc33a12cd51b8cf113baf8502455",
    "x-app-id": "06987fb6"
  }
})


export default new vuex.Store({
    state: {
    results:[],
    list: []
    },
    mutations: {
      addToList(state, item){
        state.list.push(item)
      }

    },
    actions:{
      addToList({commit, dispatch}, item){
        commit('addToList', item)
      },

     search({commit, dispatch}, query){
          api.post("", {query:query})
          .then(res=>{
              commit('',)
          })
            
        }
    }

  })
