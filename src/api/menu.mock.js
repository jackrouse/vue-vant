export const menu = [{
  'id': 13,
  'parentId': -1,
  'children': [{
    'id': 5,
    'parentId': 13,
    'children': [{
      'id': 1,
      'parentId': 5,
      'children': null,
      'icon': 'yonghuguanli',
      'title': '用户管理',
      'href': '/admin/user',
      'spread': false,
      'path': '/adminSys/baseManager/userManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'userManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 6,
      'parentId': 5,
      'children': null,
      'icon': 'menuManage',
      'title': '菜单管理',
      'href': '/admin/menu',
      'spread': false,
      'path': '/adminSys/baseManager/menuManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'menuManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 7,
      'parentId': 5,
      'children': null,
      'icon': 'jiaosequanxianguanli',
      'title': '角色权限管理',
      'href': '/admin/group',
      'spread': false,
      'path': '/adminSys/baseManager/groupManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'groupManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 8,
      'parentId': 5,
      'children': null,
      'icon': 'jiaoseleixing',
      'title': '角色类型管理',
      'href': '/admin/groupType',
      'spread': false,
      'path': '/adminSys/baseManager/groupTypeManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'groupTypeManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 27,
      'parentId': 5,
      'children': null,
      'icon': 'wendangzhongxin',
      'title': '操作日志',
      'href': '/admin/gateLog',
      'spread': false,
      'path': '/adminSys/baseManager/gateLogManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'gateLogManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 306071352025152,
      'parentId': 5,
      'children': null,
      'icon': 'quyuguanli',
      'title': '区域管理',
      'href': '/admin/area',
      'spread': false,
      'path': '/adminSys/baseManager/areaManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'areaManager',
      'type': 'menu',
      'label': null
    }],
    'icon': 'dispose-basic',
    'title': '基础配置管理',
    'href': '/admin',
    'spread': false,
    'path': '/adminSys/baseManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'baseManager',
    'type': 'dirt',
    'label': null
  }, {
    'id': 29,
    'parentId': 13,
    'children': [{
      'id': 30,
      'parentId': 29,
      'children': null,
      'icon': 'fuwuguanli',
      'title': '服务管理',
      'href': '/auth/service',
      'spread': false,
      'path': '/adminSys/authManager/serviceManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'serviceManager',
      'type': null,
      'label': null
    }],
    'icon': 'fuwuquanxianguanli-dianji',
    'title': '服务权限管理',
    'href': '/auth',
    'spread': false,
    'path': '/adminSys/authManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'authManager',
    'type': 'dirt',
    'label': null
  }, {
    'id': 31,
    'parentId': 13,
    'children': [{
      'id': 32,
      'parentId': 31,
      'children': null,
      'icon': 'fuwuzhucezhongxin',
      'title': '服务注册中心',
      'href': 'http://localhost:8848/nacos',
      'spread': false,
      'path': '/adminSys/monitorManager/serviceEurekaManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'serviceEurekaManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 33,
      'parentId': 31,
      'children': null,
      'icon': 'fuwuzhuangtaijiankong',
      'title': '服务状态监控',
      'href': '',
      'spread': false,
      'path': '/adminSys/monitorManager/serviceEurekaManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'serviceMonitorManager',
      'type': 'menu',
      'label': null
    }, {
      'id': 34,
      'parentId': 31,
      'children': null,
      'icon': 'fuwulianlujiankong',
      'title': '服务链路监控',
      'href': '',
      'spread': false,
      'path': '/adminSys/monitorManager/serviceZipkinManager',
      'component': null,
      'authority': null,
      'redirect': null,
      'code': 'serviceZipkinManager',
      'type': 'menu',
      'label': null
    }],
    'icon': 'jiankong',
    'title': '监控模块管理',
    'href': '/service',
    'spread': false,
    'path': '/adminSys/monitorManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'monitorManager',
    'type': 'dirt',
    'label': null
  }],
  'icon': 'quanxianguanlixitong',
  'title': '权限管理系统',
  'href': '/base',
  'spread': false,
  'path': '/adminSys',
  'component': null,
  'authority': null,
  'redirect': null,
  'code': 'adminSys',
  'type': 'dirt',
  'label': null
}, {
  'id': 300002787903552,
  'parentId': -1,
  'children': [{
    'id': 300004117043264,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'kehutongji',
    'title': '客户统计',
    'href': '/admin/statForms/userStat',
    'spread': false,
    'path': '/statForms/userStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'userStat',
    'type': 'menu',
    'label': null
  }, {
    'id': 300004346120256,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'yajintongji',
    'title': '押金统计',
    'href': '/admin/statForms/cashStat',
    'spread': false,
    'path': '/statForms/cashStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'cashStat',
    'type': 'menu',
    'label': null
  }, {
    'id': 300004701489216,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'taocan',
    'title': '套餐统计',
    'href': '/admin/statForms/setmealStat',
    'spread': false,
    'path': '/statForms/setmealStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'setmealStat',
    'type': 'menu',
    'label': null
  }, {
    'id': 300004900077632,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'dingdanliangtongji',
    'title': '取件订单统计',
    'href': '/admin/statForms/takeordersStat',
    'spread': false,
    'path': '/statForms/takeordersStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'takeordersStat',
    'type': 'menu',
    'label': null
  }, {
    'id': 300005387849792,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'xiaoshoue',
    'title': '月销售额统计',
    'href': '/admin/statForms/saleStat',
    'spread': false,
    'path': '/statForms/saleStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'saleStat',
    'type': null,
    'label': null
  }, {
    'id': 301626432776256,
    'parentId': 300002787903552,
    'children': null,
    'icon': 'tongji',
    'title': '租镜量统计',
    'href': '/admin/statForms/rentGlassesStat',
    'spread': false,
    'path': '/statForms/rentGlassesStat',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'rentGlassesStat',
    'type': 'menu',
    'label': null
  }],
  'icon': 'chart',
  'title': '统计报表',
  'href': '/forms',
  'spread': false,
  'path': '/statForms',
  'component': null,
  'authority': null,
  'redirect': null,
  'code': 'statForms',
  'type': 'menu',
  'label': null
}, {
  'id': 18995802812452864,
  'parentId': -1,
  'children': [{
    'id': 297381984403520,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'taocanguanli',
    'title': '套餐管理',
    'href': '/admin/meal',
    'spread': false,
    'path': '/adminSys/operationManager/accountManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'mealManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 298770549979200,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'jiqiguanli',
    'title': '机器管理',
    'href': '/admin/apparatus',
    'spread': false,
    'path': '/adminSys/operationManager/apparatusManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'apparatusManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 298810768810048,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'yanjing',
    'title': '眼镜管理',
    'href': '/admin/glasses',
    'spread': false,
    'path': '/adminSys/operationManager/glassesManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'glassesManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 299524353833024,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'dingdanchaxun',
    'title': '订单查询',
    'href': '/admin/orderInquire',
    'spread': false,
    'path': '/adminSys/operationManager/orderInquire',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'orderInquire',
    'type': 'menu',
    'label': null
  }, {
    'id': 299653557610560,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'zhonglei',
    'title': '眼镜种类',
    'href': '/admin/glassesType',
    'spread': false,
    'path': '/adminSys/operationManager/glassesTypeManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'glassesTypeManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 300189436164160,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'guanggaoguanli',
    'title': '广告管理',
    'href': '/admin/adverManager',
    'spread': false,
    'path': '/adminSys/operationManager/adverManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'adverManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 300384115728448,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'umidd17',
    'title': '支付宝解冻',
    'href': '/admin/statForms/zfbUnfreeze',
    'spread': false,
    'path': '/adminSys/operationManager/zfbUnfreeze',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'zfbUnfreeze',
    'type': null,
    'label': null
  }, {
    'id': 300384189161536,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'weixin',
    'title': '微信解冻',
    'href': '/admin/statForms/wxUnfreeze',
    'spread': false,
    'path': '/adminSys/operationManager/wxUnfreeze',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'wxUnfreeze',
    'type': 'menu',
    'label': null
  }, {
    'id': 305135314133056,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'gongshi',
    'title': '分润公式',
    'href': 'admin/exp',
    'spread': false,
    'path': '/adminSys/operationManager/expManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'expManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 305756959297600,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'dd',
    'title': '订单管理',
    'href': '/admin/orderManager',
    'spread': false,
    'path': '/adminSys/operationManager/orderManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'orderManager',
    'type': 'menu',
    'label': null
  }, {
    'id': 306221236578368,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'jilu',
    'title': '订单操作记录',
    'href': '/admin/orderLog',
    'spread': false,
    'path': '/adminSys/operationManager/orderLog',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'orderLog',
    'type': 'menu',
    'label': null
  }, {
    'id': 306403464865856,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'datouzhen',
    'title': '客户标识',
    'href': '/admin/customerFlag',
    'spread': false,
    'path': '/adminSys/operationManager/customerFlag',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'customerFlag',
    'type': 'menu',
    'label': null
  }, {
    'id': 18988476682604544,
    'parentId': 18995802812452864,
    'children': null,
    'icon': 'yingyuan',
    'title': '影院管理',
    'href': '/admin/cinema',
    'spread': false,
    'path': '/adminSys/operationManager/cinemaManager',
    'component': null,
    'authority': null,
    'redirect': null,
    'code': 'cinemaManager',
    'type': 'menu',
    'label': null
  }],
  'icon': 'yunyingguanli',
  'title': '运营管理',
  'href': '/opetation',
  'spread': false,
  'path': '/adminSys/operationManager',
  'component': null,
  'authority': null,
  'redirect': null,
  'code': 'operationManager',
  'type': 'dirt',
  'label': null
}]
