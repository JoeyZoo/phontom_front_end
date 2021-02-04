import request from '@/utils/request'
export default {
   pageTeacherFront(page,limit) {
       return request({
           url:'/eduservice/teacherfront/pageTeacherFront/'+page+'/'+limit,
           method:'post'
       })
   },
   getTeacherFrontInfo(teacherId){
       return request({
           url:'/eduservice/teacherfront/getTeacherFrontInfo/'+teacherId,
           method:'get'
       })
   }
}