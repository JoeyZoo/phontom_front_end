import request from '@/utils/request'
export default{
    //生成订单
    createOrder(courseId){
        return request({
            url:'/orderservice/order/createOrder/'+courseId,
            method:'post'
        })
    },
    //查询订单
    getOrder(orderNo){
        return request({
            url:'/orderservice/order/getOrder/'+orderNo,
            method:'get'
        })
    },
    //生成二维码的方法
    getWxCode(orderNo){
        return request({
            url:'/orderservice/paylog/getWxCode/'+orderNo,
            method:'get'
        })
    },
    //查询微信支付状态，修改order表数据，添加数据到支付记录表
    queryPayStatus(orderNo){
        return request({
            url:'/orderservice/paylog/queryPayStatus/'+orderNo,
            method:'get'
        })
    }

}
