import request from '@/utils/request'
export default{
    queryIsFan(relationVo){
        return request({
            url:'/userservice/relation/queryIsFan',
            method:'post',
            data:relationVo
        })
    },
    addFollow(relationVo){
        return request({
            url:'/userservice/relation/addFollow',
            method:'post',
            data:relationVo
        })
    },
    activatingFollow(relationVo){
        return request({
            url:'/userservice/relation/activatingFollow',
            method:'post',
            data:relationVo
        })
    },
    activatingFollowB(relationVo){
        return request({
            url:'/userservice/relation/activatingFollowB',
            method:'post',
            data:relationVo
        })
    },
    cancelFollow(relationVo){
        return request({
            url:'/userservice/relation/cancelFollow',
            method:'post',
            data:relationVo
        })
    },
    cancelFollowB(relationVo){
        return request({
            url:'/userservice/relation/cancelFollowB',
            method:'post',
            data:relationVo
        })
    }

    
}