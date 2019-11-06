const state = {
  isFirstLogin: true,
  showMenu: false,
  direction: 'forward' // 页面切换方向
}

const mutations = {
  SET_LOGIN_FIRST: (state, flag) => {
    state.loginFirst = flag
  },
  updateDirection (state, direction) {
    state.direction = direction
  },
  toggleSlideMenu (state) {
    state.showMenu = !state.showMenu
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
