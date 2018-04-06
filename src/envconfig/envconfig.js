/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = '//cangdu.org:8001/img/';
if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://interface.mobi.7m.com.cn';
}else{
  baseURL = 'http://interface.mobi.7m.com.cn';
}


export default {imgUrl, baseURL}
