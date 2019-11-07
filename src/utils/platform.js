const ua = navigator.userAgent
/**
 * android ios other
 *
 */
export const os = (function () {
  if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
    return 'android'
  }
  if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'ios'
  }
  return 'other'
})()

/**
 *
 * wx qq uc qqBrowser chrome safari other
 */
export const browser = (function () {
  // custom app
  // if (ua.indexOf('FDCAPP') > -1) {
  //   return 'fdc'
  // }
  if (ua.indexOf('UCBrowser') > -1) {
    return 'uc'
  }
  if (window.__wxjs_environment === 'miniprogram') {
    return 'mp'
  }
  if (ua.indexOf('MicroMessenger') > -1) {
    return 'wx'
  }
  if (ua.indexOf('MQQBrowser') > -1 && ua.indexOf('QQ/') === -1) {
    return 'qqBrowser'
  }
  if (ua.indexOf('QQ/') > -1) {
    return 'qq'
  }
  if (ua.indexOf('Chrome') > -1) {
    return 'chrome'
  }
  if (ua.indexOf('Safari') > -1) {
    return 'safari'
  }
  return 'other'
})()

export const iosVersion = (function () {
  var version = null
  if (os === 'ios') {
    var reg = /OS [\d._]+/gi
    var v_info = ua.match(reg)
    version = (v_info + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.') // 得到版本号9.3.2或者9.0
    version = parseInt(version.split('.')[0]) // 得到版本号第一位
  }

  return version
})()

export const isPC = (function () {
  var Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (ua.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
})()
