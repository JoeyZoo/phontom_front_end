import  request from '@/utils/request'
export default {
    //获取视频播放凭证
    /**
     getPlayAuth(videoSourceId) {
        return request({
            url:'/vodservice/vod/getPlayAuth/'+videoSourceId,
            method:'get'
        })
    }*/
    //获取视频播放凭证
    getVideoPlayAuth(videoId){
        return request({
            url:'/vodservice/videoPlayAuth'+videoId,
            method:'get'
        })
    },
    //获取视频播放地址
    getPlayInfo(videoId){
        return request({
            url:'/vodservice/playInfo/'+videoId,
            method:'get'
        })
    },
    //删除阿里云视频
    deleteVideo(videoId){
        return request({
            url:'/vodservice/'+videoId,
            method:'delete'
        })
    }
}