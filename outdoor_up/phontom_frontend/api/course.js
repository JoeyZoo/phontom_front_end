import request from '@/utils/request'
export default {
    //课程分页查询+条件查询
    pageCourseFront(page,limit,courseFrontQueryVo) {
       return request({
           url:`/eduservice/coursefront/pageCourseFront/${page}/${limit}`,
           method:'post',
           data:courseFrontQueryVo
       })
   },
    //根据课程id查询课程详情
    getCourseFrontInfo(courseId) {
        return request({
            url:'/eduservice/coursefront/getCourseFrontInfo/'+courseId,
            method:'get'
        })
    },
    //在前端展示课程一级二级分类
    showSubject() {
        return request({
            url:'/eduservice/subject/showSubject',
            method:'get'
        })
    }



}