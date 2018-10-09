import Vue from 'vue'
import axios from 'axios';
import qs from 'qs';


/*请求拦截器*/
axios.interceptors.request.use(function (config) {
  document.getElementById('login').style.display = 'block'
  return config;
}, function (error) {
  return Promise.reject(error);
  back()
});
// 响应时拦截
axios.interceptors.response.use(function (response) {
    document.getElementById('login').style.display = 'none'
    return response;
}, function (error) {
    setTimeout( ()=>{
        document.getElementById('login').style.display = 'none'
    },1500)
    alert(error)
    return Promise.reject(error);
});
    
 function http (method, url, param) {
    param = param && typeof param === 'object' ? param : {};
    const config = {
        url: url,
        method: method,
        transformRequest: [function (param) {
           
            return qs.stringify(param);
        }],
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    // post请求时需要设定Content-Type
    if (method == 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        config.data = param;
    } else if (method === 'get') {
        config.params = param;
    }
    return axios(config);
}

export {
    http
};