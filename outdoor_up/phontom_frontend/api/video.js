import request from '@/utils/request'
export default{
    //查询所有最新视频
    findAllVideo(){
        return request({
            url:'/videoservice/video/findAll',
            method:'get'
        })
    },
    //最新推荐
    queryLatestRecommand(current,size){
        return request({
            url:'/videoservice/video/queryLatestRecommand/'+current+'/'+size,
            method:'get'
        })
    },
    //首页幻灯片
    showSlide(){
        return request({
            url:'/videoservice/video/showSlide',
            method:'get'
        })
    },
    //统计视频条数
    countVideoTotal(){
        return request({
            url:'/videoservice/video/countVideoTotal',
            method:'get'
        })
    },
    //查询某位up主所有作品
    findUpAllVideo(id){
        return request({
            url:'/videoservice/video/findAll/'+id,
            method:'get'
        })
    },
    //根据视频云id查找视频
    findVideoBySourceId(videoSourceId){
        return request({
            url:'/videoservice/video/findVideoBySourceId/'+videoSourceId,
            method:'get'
        })
    },
    //添加视频
    addVideo(videoVo){
        return request({
            url:'/videoservice/video/addVideo',
            method:'post',
            data:videoVo
        })
    },
    //查询Up所有粉丝并通知动态
    addUpdate(newUpdateVo){
        return request({
            url:'/videoservice/update/addUpdate',
            method:'post',
            data:newUpdateVo
        })
    },
    //逻辑删除某个视频
    deleteByLogic(id){
        return request({
            url:'/videoservice/video/deleteByLogic/'+id,
            method:'put'
        })
    },
    //标题关键词查询视频列表
    findVideoByCondition(videoQueryVo){
        return request({
            url:'/videoservice/video/findVideoByCondition',
            method:'post',
            data:videoQueryVo
        })
    },
    //根据upId查询用户行为数据
    queryUpTotalData(upId){
        return request({
            url:'/videoservice/video/findUpData/'+upId,
            method:'get'
        })
    },
    //添加视频播放记录并返回视频最新播放数
    addPlayRecord(playRecordVo){
        return request({
            url:'/videoservice/playRecord/addPlayRecord',
            method:'post',
            data:playRecordVo
        })
    },
    //查询用户是否已点赞视频
    queryIsPraised(praiseVo){
        return request({
            url:'/videoservice/praise/queryIsPraised',
            method:'post',
            data:praiseVo
        })
    },
    //新增赞
    addPraise(praiseVo){
        return request({
            url:'/videoservice/praise/addPraise',
            method:'post',
            data:praiseVo
        })
    },
    //取消赞
    cancelPraise(praiseVo){
        return request({
            url:'/videoservice/praise/cancelPraise',
            method:'post',
            data:praiseVo
        })
    },
    //取消赞B
    cancelPraiseB(praiseVo){
        return request({
            url:'/videoservice/praise/cancelPraiseB',
            method:'post',
            data:praiseVo
        })
    },
    //激活赞
    activatingPraise(praiseVo){
        return request({
            url:'/videoservice/praise/activatingPraise',
            method:'post',
            data:praiseVo
        })
    },
    //激活赞B
    activatingPraiseB(praiseVo){
        return request({
            url:'/videoservice/praise/activatingPraiseB',
            method:'post',
            data:praiseVo
        })
    },
    // 查询用户是否收藏某视频
    queryIsCollected(collectVo){
        return request({
            url:'/videoservice/collect/queryIsCollected',
            method:'post',
            data:collectVo
        })
    },
    // 激活收藏
    activatingCollect(collectVo){
        return request({
            url:'/videoservice/collect/activatingCollect',
            method:'post',
            data:collectVo
        })
    },
    // 激活收藏
    activatingCollectB(collectVo){
        return request({
            url:'/videoservice/collect/activatingCollectB',
            method:'post',
            data:collectVo
        })
    },
    // 使收藏失效
    cancelCollect(collectVo){
        return request({
            url:'/videoservice/collect/cancelCollect',
            method:'post',
            data:collectVo
        })
    },
    cancelCollectB(collectVo){
        return request({
            url:'/videoservice/collect/cancelCollectB',
            method:'post',
            data:collectVo
        })
    },
    addCollect(collectVo){
        return request({
            url:'/videoservice/collect/addCollect',
            method:'post',
            data:collectVo
        })
    },
    //某视频一级评论按照发布时间降序
    listCommentsOrderByTime(commentFlagVO){
        return request({
            url:'/videoservice/comment/listCommentsOrderByTime',
            method:'post',
            data:commentFlagVO
        })
    },
    // 某视频一级评论按照发布时间降序
    listCommentsOrderByPraise(commentFlagVO){
        return request({
            url:'/videoservice/comment/listCommentsOrderByPraise',
            method:'post',
            data:commentFlagVO
        })
    },
    //增加新评论
    addComment(newCommentVo){
        return request({
            url:'/videoservice/comment/addComment',
            method:'post',
            data:newCommentVo
        })
    },
    //逻辑删除用户评论
    updateComment(id){
        return request({
            url:'/videoservice/comment/updateComment/'+id,
            method:'get'
        })
    },
    //查询用户关注的UP主动态
    queryUpdate(fanId){
        return request({
            url:'/videoservice/update/queryUpdate/'+fanId,
            method:'get'
        })
    },
    //将动态设为已查阅
    updateChecked(fanId){
        return request({
            url:'/videoservice/update/updateChecked/'+fanId,
            method:'get'
        })
    },
    //查询用户历史播放记录
    queryPlayHistory(fanId){
        return request({
            url:'/videoservice/playRecord/queryPlayHistory/'+fanId,
            method:'get'
        })
    }

}
