export const a = {
  asyncComponent: () => import(/* webpackChunkName: "importTest" */'@/views/main/importTest'),
  name: 2
}
export const b = 2
export default {
  name: 1
}
