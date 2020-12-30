var tool = {
  // 判断是pc端还是移动端
  IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },
	// 校验身份证
	checkIdCard: function IdentityCodeValid(code) {
		var city = {
			11: "北京",
			12: "天津",
			13: "河北",
			14: "山西",
			15: "内蒙古",
			21: "辽宁",
			22: "吉林",
			23: "黑龙江 ",
			31: "上海",
			32: "江苏",
			33: "浙江",
			34: "安徽",
			35: "福建",
			36: "江西",
			37: "山东",
			41: "河南",
			42: "湖北 ",
			43: "湖南",
			44: "广东",
			45: "广西",
			46: "海南",
			50: "重庆",
			51: "四川",
			52: "贵州",
			53: "云南",
			54: "西藏 ",
			61: "陕西",
			62: "甘肃",
			63: "青海",
			64: "宁夏",
			65: "新疆",
			71: "台湾",
			81: "香港",
			82: "澳门",
			91: "国外 "
		};
		var tip = "";
		var pass = true;

		if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
			tip = "身份证号格式错误";
			pass = false;
		} else if (!city[code.substr(0, 2)]) {
			tip = "地址编码错误";
			pass = false;
		} else {
			//18位身份证需要验证最后一位校验位
			if (code.length == 18) {
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				//校验位
				var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++) {
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				var last = parity[sum % 11];
				if (parity[sum % 11] != code[17]) {
					tip = "校验位错误";
					pass = false;
				}
			}
		}
		return pass;
	},
	// 校验手机号
	checkPhone: function(pone) {
		var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		if (!myreg.test(pone)) {
			return false;
		} else {
			return true;
		}
	},
	// 校验邮箱
	checkMail: function(v) {
		let a = false;
		var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则表达式
		if (!reg.test(v)) {
			a = false
		} else {
			a = true
		}
		return a
	},
	// 时间戳转换
	timestampToTime: function(timestamp) {
		timestamp = timestamp + ""
		if (timestamp.length == 10) {
			timestamp = timestamp - 0
			var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		}
		if (timestamp.length == 13) {
			timestamp = timestamp - 0
			var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		}
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
		let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
		let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		return Y + M + D + h + m + s;

	},
	// 时间差 时间戳相减
	timeDifference: function(time1, time2) {
		let s1 = time1;
		let s2 = time2;
		var total = parseInt((s2 - s1) / 1000);
		var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
		var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
		var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
		var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
		var min = parseInt(afterHour / 60); //计算整数分
		var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
		return hour + '小时' + min + '分' + afterMin + '秒'
	},
	// 复制的方法
	copyText: function(text, callback) { // text: 要复制的内容， callback: 回调
		var tag = document.createElement('input');
		tag.setAttribute('id', 'xm_copy_input');
		tag.value = text;
		document.getElementsByTagName('body')[0].appendChild(tag);
		document.getElementById('xm_copy_input').select();
		document.execCommand('copy');
		document.getElementById('xm_copy_input').remove();
		if (callback) {
			callback(text)
		}
	},
	// 时间转换
	timeStarChange: function(t) {
		var d = new Date(t);
		var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '  00:00:00';
		var aa = new Date(datetime);
		var c = aa.getTime()
		return c
	},
	timeEndChange: function(t) {
		var d = new Date(t);
		var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '  23:59:59';
		var aa = new Date(datetime);
		var c = aa.getTime()
		return c
	},
	// 隐藏号码
	//str：要进行隐藏的变量  frontLen: 前面需要保留几位    endLen: 后面需要保留几位
	hiddenNumber: function(str, frontLen, endLen) {
		var len = str.length - frontLen - endLen;
		var xing = '';
		for (var i = 0; i < len; i++) {
			xing += '*';
		}
		return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
	},
	// 超出省略
	moreOverText: function(val) {
		if (val != '' || val != undefined) {
			if (val.length > 10) {
				let a = val.substring(0, 10)
				return a + '...'
			} else {
				return val
			}
		}
	},
	//设置cookie
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 30 * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		if (process.env.NODE_ENV === 'production'){
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=.rightknights.com";
		} else {
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=localhost";
		}
	},
	//获取cookie
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	},
	clearCookie(name) {
	    this.setCookie(name, "", -1);
	},
	// 判断是pc端还是移动端
	IsPC(){
	  var userAgentInfo = navigator.userAgent;
	  var Agents = [
	    "Android",
	    "iPhone",
	    "SymbianOS",
	    "Windows Phone",
	    "iPad",
	    "iPod"
	  ];
	  var flag = true;
	  for (var v = 0; v < Agents.length; v++) {
	    if (userAgentInfo.indexOf(Agents[v]) > 0) {
	      flag = false;
	      break;
	    }
	  }
	  return flag;
	},
}


export default tool
