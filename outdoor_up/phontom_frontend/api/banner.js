 import request from '@/utils/request'
 export default {
    getAllBanner(){
        return request({
            url:'/cmsservice/crmbanner/getAllBanner',
            method:'get'
        })
    }
 }