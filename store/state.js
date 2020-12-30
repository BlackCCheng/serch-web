const state = {
  // 是否购买大会员
  hasbuyvip: false,
  // 超时判断
  // 登录
  index: '0',
  loginModal: false,
  login: false,
  openId: '',
  authorName: '',
  // 重置密码code
  dataCode: '',
  homeNumber: '',
  banner: [],
  logowall: [],
  ticket: '',
  metaInfo: {
    title: "",
    keywords: "",
    description: ""
  },
  userReceiveGift: { //老用户召回领取弹框
    status: false,
    type: '',
  },
  // 版权小课活动
  shareModal: false,
  successModal: false,
  receiceModal: false,
  classCode: '',
  newList: '',
  // 是否展示会员等级提升的弹窗
  show_upgrade: {
    show: false,
    score: 0
  },
  // 会员积分,该项适用于有累计性的积分项目，需手动传入积分值及增加的值
  vip_integral: {

    init: true,
    arr: [
      {
        add: 0,
        name: ''
      }
    ]
  },
  // 积分产生变化时调用，具体数据无需传入，适用于每日一次性的积分变化
  vip_integral_dispatch: '',
}

export default state