module.exports = ({ file }) => {
  let vwUnit // 判断条件 请自行调整 我使用的是 mand-mobile ui 没有对vant引入进行测试
  if (file && file.dirname && file.dirname.indexOf('node_modules\\vant') > -1) {
    vwUnit = 375
  } else {
    vwUnit = 750
  }
  return {
    plugins: [
      require('autoprefixer'),
      require('postcss-px-to-viewport')({
        unitToConvert: 'px',
        viewportWidth: vwUnit,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['ignore'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      })
    ]
  }
}
