import request from '@/utils/request'
export default {
   /**
     //发送验证码
   sendMsm(phoneNumber) {
       return request({
           url:'/msmservice/msm/sendMsm/'+phoneNumber,
           method:'get'
       })
   },
   //注册
   register(registerVo) {
       return request({
           url:'/ucenterservice/ucentermember/register',
           method:'post',
           data: registerVo
       })
   } */

    //用户注册
    regist(registVo){
        return request({
            url:'/userservice/user/regist',
            method:'post',
            data:registVo
        })
       },
    //发送验证码
    sendSms(Phonenumbers){
        return request({
            url:'/smsservice/sendSms/'+Phonenumbers,
            method:'get',
        })
    }
}