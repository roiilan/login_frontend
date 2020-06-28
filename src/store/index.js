import Vue from 'vue'
import Vuex from 'vuex';
import userStore from '../modules/user.store.js';
// import cloudinaryService from '../services/cloudinary.service.js'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
 
  mutations: {
    
  },
  getters: {
   
  }, 
  actions: {
  //   async addImg(context, { imgEv }) {
  //     const img = await cloudinaryService.uploadImg(imgEv)   
  //     return img.secure_url
  // },

  },
  modules: {
    userStore,  
  }
})
