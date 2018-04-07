/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = '//cangdu.org:8001/img/';
if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:3000';
}else{
  baseURL = 'http://localhost:3000';
}


export default {imgUrl, baseURL}
