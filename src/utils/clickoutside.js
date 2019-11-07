// 根据element-ui 修改  在keep-alive中切换路由会存在没有销毁的问题
// 在使用v-clickoutside元素加入v-if="inThisPage"
// data(){
//   return {
//    inThisPage: true
//   }
// }
// deactivated() {
//   this.inThisPage = false
// },
// activated() {
//   this.inThisPage = true
// }
const nodeList = []
const ctx = '@@clickoutsideContext'

let startClick
let seed = 0

// document.addEventListener('mousedown', e => (startClick = e), false)
document.addEventListener('touchstart', e => (startClick = e), false)

// document.addEventListener('mouseup', e => {
//   nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
// }, false)
document.addEventListener('touchend', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
}, false)

function createDocumentHandler (el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.focusElment &&
      (vnode.context.focusElment.contains(mouseup.target) ||
      vnode.context.focusElment.contains(mousedown.target)))) return
    // focusElment 当前使用指令上下文中，返回需排除的dom节点
    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]()
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn()
    }
  }
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind (el, binding, vnode) {
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
    console.log(vnode, 1111111)
  },

  update (el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },

  unbind (el) {
    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  }
}
