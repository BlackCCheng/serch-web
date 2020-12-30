/************************
 * @Author    小马
 * @DateTime  2019-08-29
 

************************/

"use strict";

import axios from "axios";
import qs from "qs";

import store from '@/store/index'

const responseUrl = [
	'/account/status',
	'/account/login'
]

// axios.defaults.timeout = 10000 //设置请求超时
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // POST请求头
axios.interceptors.request.use((config) => {
	if ((config.url.includes('/login/') || config.url.includes('/ticket/destroy'))) {
		config.baseURL = '/login/'
	} else if (/^\/pay\//.test(config.url)) {
		config.baseURL = '/'
	} else if (/^\/space\//.test(config.url)) {
		config.baseURL = '/'
	} else {
		config.baseURL = '/home/'
	}
	return config;

}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});


// 拦截响应
axios.interceptors.response.use(res => {
	 const code = res.data.code
	 if(res.data.code == '0014'){
		 if(responseUrl.indexOf(res.config.url) == -1 ){
			 store.commit('IS_LOGINMODAL', true);
		 }else{
			 return res
		 }
	 } else {
      return res
    }
	return res;
}, function(error) {
	return Promise.resolve({})
});



// axios.defaults.baseURL = '/api/'

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

// 组件销毁时  结束get 请求    
// CancelToken get方式在第二个参数，post在第三个参数
var clearGet = function(url) {
	return new Promise((resolve) => {
		axios.get(url, {
			cancelToken: source.token
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			if (axios.isCancel(err)) {
				// window.console.log('Request canceled', err.message);
			} else {
				// 处理错误
			}
		})
	})
}

var get = function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	})
}

var post = function post(url, params, headers) {
	return new Promise((resolve, reject) => {
		axios.post(url, qs.stringify(params), headers)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

var arrPost = function arrPost(url, data, param, config) {
	config.params = param;
	return new Promise((resolve, reject) => {
		axios.post(url, data, config)
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

var formDataPost = function formDataPost(url, params, headers) {
	return new Promise((resolve, reject) => {
		axios.post(url, params, headers)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

var del = function deletes(url) {
	return new Promise((resolve, reject) => {
		axios.delete(url)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

export default {
	get,
	post,
	del,
	arrPost,
	clearGet,
	source,
	CancelToken,
	formDataPost
}
