const state = {
  isFirstLogin: true,
  direction: 'forward' // 页面切换方向
}

const mutations = {
  SET_LOGIN_FIRST: (state, flag) => {
    state.loginFirst = flag
  },
  updateDirection (state, direction) {
    state.direction = direction
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
