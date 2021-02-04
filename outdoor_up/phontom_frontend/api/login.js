import request from '@/utils/request'
export default {
   //账号密码登录
   /** 
   login(ucenterMember) {
       return request({
           url:'/ucenterservice/ucentermember/login',
           method:'post',
           data: ucenterMember
       })
   },
   //根据token获取用户信息
   getMemberInfo() {
        return request({
            url:'/ucenterservice/ucentermember/getMemberInfo',
            method:'get'
        })
   }
   */
 
   //用户登录
   login(loginVo){
       return request({
           url:'/userservice/user/login',
           method:'post',
           data:loginVo
       })
   },
   //根据token获取用户信息
   getUserInfo(){
       return request({
           url:'/userservice/user/getUserInfo',
           method:'get'
       })
   }

}