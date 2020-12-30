const mutations = {
  // 是否购买大会员
  SET_HAS_BUY_VIP(state, status) {
    state.hasbuyvip = status
  },
   // 是否展示会员等级提升的弹窗
   SET_SHOW_UPGRADE(state, status) {
    state.show_upgrade = status
  },
  // 每日变化多次也只计一次的积分变化
  SET_VIP_INTEGRAL_DISPATCH(state, status) {
    state.vip_integral_dispatch = status
  },
  // 积分
  SET_VIP_INTEGRAL(state, status) {
    state.vip_integral = status
  },
  // 设置meta
  CAHNGE_META_INFO(state, metaInfo) {
  	state.metaInfo = metaInfo;
  },
  // ticket
  SET_TICKET(state, status) {
  	state.ticket = status
  },
  //
  SET_LOGOWALL(state, status) {
  	state.logowall = status
  },
  // 首页banner
  SET_BANNER(state, status) {
  	state.banner = status
  },
  // 首页信息number
  SET_HOMENUMBER(state, status) {
  	state.homeNumber = status
  },
  // 登录
  SET_INDEX(state, status) {
  	state.index = status
  },
  IS_LOGINMODAL(state, status) {
  	state.loginModal = status
  },
  IS_LOGIN(state, status) {
  	state.login = status
  },
  SET_OPENID(state, status) {
  	state.openId = status
  },
  GET_AUTHORNAME(state, status) {
  	state.authorName = status
  },
  SET_DATACODE(state, status) {
  	state.dataCode = status
  },
  SET_USERRECEIVEGIFT(state, status) {
  	state.userReceiveGift = status
  },
  // 版权小课活动
  SET_SHAREMODAL(state, status) {
  	state.shareModal = status
  },
  SET_SUCCESSMODAL(state, status) {
  	state.successModal = status
  },
  SET_RECEICE(state, status) {
  	state.receiceModal = status
  },
  SET_CLASSCODE(state, status) {
  	state.classCode = status
  },
  // 新闻
  GET_NEWSLISTS(state, status) {
  	state.newList = status
  },
}

export default mutations
